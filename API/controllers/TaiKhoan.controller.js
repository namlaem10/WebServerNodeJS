const jwt = require("jsonwebtoken");
const fs = require("fs");
const User = require("../models/TaiKhoan.model");
const Travel = require("../models/HanhTrinh.model");
var nodemailer = require("nodemailer");
const accessTokenSecret = "dangcongsanvietnammuonnam";

module.exports.login = async (req, res) => {
  if (req.body) {
    const { email, password } = req.body;
    const Users = await User.find();
    const userFind = Users.find((user) => {
      return user.email === email && user.password === password;
    });
    if (userFind) {
      const accessToken = jwt.sign({ idUser: userFind._id }, accessTokenSecret);
      User.findOne({ _id: userFind._id }, "-password -fcmToken")
        .populate("friend", "email display_name avatar phone")
        .exec(async (err, user_return) => {
          if (err) res.status(400).send(err);
          else {
            const travel = await Travel.find({ create_by: userFind._id });
            const total_travel = await Travel.countDocuments({
              member: userFind._id,
            });
            const travel_share = travel.filter((item) => {
              return item.isShare === true;
            });
            const travel_have_rating = travel_share.filter((item) => {
              return item.rating_count !== 0;
            }).length;
            let total_rating = 0;
            let person_rating = 0;
            travel_share.map((item) => {
              if (item.rating_count !== 0)
                return (
                  (total_rating += item.rating),
                  (person_rating += item.rating_count)
                );
            });
            res.json({
              user_info: user_return,
              token: accessToken,
              total_travel: total_travel,
              travel_share: travel_share.length,
              rating_point:
                travel_share.length === 0
                  ? 0
                  : Math.round(total_rating / travel_have_rating),
              people_rating: person_rating,
            });
          }
        });
    } else {
      return res.status(401).json({
        message: "Email hoặc mật khẩu chưa chính xác",
      });
    }
  } else {
    return res.status(400).json({
      message: "Nhập sai cú pháp, kiểm tra lại",
    });
  }
};

module.exports.register = async (req, res) => {
  const { email, password, displayName } = req.body;
  if (
    email !== undefined &&
    password !== undefined &&
    displayName !== undefined
  ) {
    const user = await User.find();
    const checkEmail = user.find((u) => {
      return u.email === email;
    });
    if (checkEmail) {
      res.status(401).json({
        message: "Email đã tồn tại",
      });
    } else {
      const lastest = await User.findOne().sort({ _id: -1 });
      const new_id = parseInt(lastest._id.split("R")[1]) + 1;
      let newUser = {
        _id: new_id < 10 ? `USER0${new_id}` : `USER${new_id}`,
        email: email,
        display_name: displayName,
        password: password,
        friend: [],
        create_at: new Date().toLocaleString(),
        update_at: null,
        avatar: null,
        phone: null,
      };
      User.create(newUser, (err) => {
        if (err) res.status(400).send(err);
        res.status(200).json({
          message: "Đăng kí thành công",
        });
      });
    }
  } else {
    return res.status(400).json({
      message: "Nhập sai cú pháp, kiểm tra lại",
    });
  }
};

module.exports.updateinfo = (req, res) => {
  const { displayName, phone } = req.body;
  if (phone !== undefined && displayName !== undefined) {
    const id = req.user.idUser;
    if (req.file) {
      const tempPath = req.file.path;
      const targetName = `public/uploads/${req.file.filename}.${
        req.file.mimetype.split("/")[1]
      }`;
      fs.rename(tempPath, targetName, (err) => {
        if (err)
          res.status(500).json({
            message: "Oops! Something went wrong!",
          });
      });
    }
    const userUpdateNonAvt = {
      display_name: displayName,
      phone: phone,
    };
    const userUpdate = {
      display_name: displayName,
      phone: phone,
      avatar: req.file
        ? `uploads/${req.file.filename}.${req.file.mimetype.split("/")[1]}`
        : null,
    };
    User.findByIdAndUpdate(
      id,
      req.file ? userUpdate : userUpdateNonAvt,
      (err, user) => {
        if (err) res.status(400).send(err);
        else {
          User.findById(id, (err, usernew) => {
            if (err) res.status(400).send(err);
            else {
              res.status(200).json({
                email: usernew.email,
                display_name: usernew.display_name,
                avatar: usernew.avatar,
                phone: usernew.phone,
              });
            }
          });
        }
      }
    );
  } else {
    return res.status(400).json({
      message: "Nhập sai cú pháp, kiểm tra lại",
    });
  }
};

module.exports.changepassword = (req, res) => {
  const { password, newpassword } = req.body;
  if (password !== undefined && newpassword !== undefined) {
    const id = req.user.idUser;
    User.findById(id, (err, user) => {
      if (err) res.status(400).send(err);
      if (user.password === password) {
        User.findByIdAndUpdate(id, { password: newpassword }, (err, users) => {
          if (err) res.status(400).send(err);
          res.status(200).json({
            message: "Thay đổi mật khẩu thành công",
          });
        });
      } else {
        return res.status(400).json({
          message: "Mật khẩu cũ không chính xác",
        });
      }
    });
  } else {
    return res.status(400).json({
      message: "Nhập sai cú pháp, kiểm tra lại",
    });
  }
};

module.exports.fcm = (req, res) => {
  const id = req.user.idUser;
  const updatefcm = {
    fcmToken: req.body.fcm,
  };
  User.findByIdAndUpdate(id, updatefcm, (err, user_update) => {
    if (err) res.status(400).send(err);
    else {
      res.status(200).json({ message: "Cập nhật thành công" });
    }
  });
};
function newPassword(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
module.exports.forgotpassword = (req, res) => {
  let userEmail = req.body.email;
  User.findOne({ email: userEmail }, (err, user) => {
    if (err) res.status(400).send(err);
    else {
      if (user !== null) {
        //Gửi mail
        let newpassword = newPassword(6);
        var nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "travel.sharing025@gmail.com",
            pass: "muutjqcpazrfufys",
          },
        });
        var mailOptions = {
          from: "travel.sharing025@gmail.com",
          to: userEmail,
          subject: "TRAVEL SHARING - QUÊN MẬT KHẨU",
          html: `<h3 style="color: #5e9ca0;">Mật Khẩu Mới Của Bạn Là:</h3> <h2  style="color:#34D374;letter-spacing: 4px;">
        ${newpassword}
        </h2>
        <h3>
          Vui lòng truy cập ứng dụng để thay đổi mật khẩu.
        </h3>`,
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            res.status(400).send(error);
          } else {
            console.log("Email sent: " + info.response);
            User.findByIdAndUpdate(
              user._id,
              { password: newpassword },
              (err, users) => {
                if (err) res.status(400).send(err);
                res.status(200).json({ message: "Đã gửi email" });
              }
            );
          }
        });
      } else {
        res.status(404).json({ message: "Email không tồn tại" });
      }
    }
  });
};
