const jwt = require("jsonwebtoken");
const fs = require("fs");
const md5 = require("md5");
const User = require("../models/TaiKhoan.model");
const Travel = require("../models/HanhTrinh.model");
var nodemailer = require("nodemailer");
const accessTokenSecret = "dangcongsanvietnammuonnam";

module.exports.addfriend = (req, res) => {
  const { friend } = req.body;
  const id = req.user.idUser;
  User.findOne({ _id: id }, (err, user) => {
    if (err) res.status(400).send(err);
    User.updateOne(
      { _id: id },
      {
        friend: [...user.friend, friend],
        update_at: new Date().toLocaleString(),
      },
      (err) => {
        if (err) res.status(400).send(err);
        else res.status(200).json({ message: "Đã thêm vào danh sách bạn bè" });
      }
    );
  });
};
module.exports.find = async (req, res) => {
  const { search } = req.query;
  const id = req.user.idUser;
  if (search.split("@")[1] !== undefined) {
    const user_find = await User.find(
      { email: search, _id: { $ne: id } },
      "-password -fcmToken"
    ).populate("friend", "email display_name avatar phone");
    res.status(200).json(user_find);
  } else if (isNaN(+search) !== true) {
    const user_find = await User.find(
      { phone: search, _id: { $ne: id } },
      "-password -fcmToken"
    ).populate("friend", "email display_name avatar phone");
    res.status(200).json(user_find);
  } else {
    const user_find = await User.find(
      {
        display_name: new RegExp(search, "i"),
        _id: { $ne: id },
      },
      "-password -fcmToken"
    ).populate("friend", "email display_name avatar phone");
    res.status(200).json(user_find);
  }
};

module.exports.login = async (req, res) => {
  if (req.body) {
    const { email, password } = req.body;
    const Users = await User.find();
    const userFind = Users.find((user) => {
      return user.email === email && user.password === md5(password);
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
module.exports.getinfo = async (req, res) => {
  const id = req.user.idUser;
  User.findOne({ _id: id }, "-password -fcmToken")
    .populate("friend", "email display_name avatar phone")
    .exec(async (err, user_return) => {
      if (err) res.status(400).send(err);
      else {
        const travel = await Travel.find({ create_by: id });
        const total_travel = await Travel.countDocuments({
          member: id,
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
};
module.exports.register = async (req, res) => {
  const { email, password, display_name, phone } = req.body;
  if (
    email !== undefined &&
    password !== undefined &&
    display_name !== undefined
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
      const all_user = await User.find();
      all_user.sort(function (a, b) {
        let numa = parseInt(a._id.substring(4, a._id.length));
        let numb = parseInt(b._id.substring(4, b._id.length));
        return numb - numa;
      });
      const new_id =
        all_user.length === 0 ? 1 : parseInt(all_user[0]._id.split("R")[1]) + 1;
      let newUser = {
        _id: new_id < 10 ? `USER0${new_id}` : `USER${new_id}`,
        email: email,
        display_name: display_name,
        password: md5(password),
        friend: [],
        create_at: new Date().toLocaleString(),
        update_at: null,
        role: 0,
        status: 1,
        avatar: `https://res.cloudinary.com/namlaem/image/upload/v1591552158/Travel%20Sharing/avatar_ad9mib.png`,
        phone: phone,
        fcmToken: null,
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
  const url = req.url;
  if (phone !== undefined && displayName !== undefined) {
    const id = req.user.idUser;
    const userUpdateNonAvt = {
      display_name: displayName,
      phone: phone,
    };
    const userUpdate = {
      display_name: displayName,
      phone: phone,
      avatar: url,
    };
    User.findByIdAndUpdate(
      id,
      req.file ? userUpdate : userUpdateNonAvt,
      (err, user) => {
        if (err) res.status(400).send(err);
        else {
          User.findOne({ _id: id }, "-password -fcmToken")
            .populate("friend", "email display_name avatar phone")
            .exec(async (err, user_return) => {
              if (err) res.status(400).send(err);
              else {
                const travel = await Travel.find({ create_by: id });
                const total_travel = await Travel.countDocuments({
                  member: id,
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
      if (user.password === md5(password)) {
        User.findByIdAndUpdate(
          id,
          { password: md5(newpassword) },
          (err, users) => {
            if (err) res.status(400).send(err);
            res.status(200).json({
              message: "Thay đổi mật khẩu thành công",
            });
          }
        );
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
    fcmToken: req.body.fcm === "null" ? null : req.body.fcm,
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
              { password: md5(newpassword) },
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
