const jwt = require("jsonwebtoken");
const fs = require("fs");
const User = require("../models/TaiKhoan.model");

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
      User.findOne({ email: email }, (err, users) => {
        if (err) res.send(err);
        else
          res.status(200).json({
            email: users.email,
            display_name: users.display_name,
            avatar: users.avatar,
            phone: users.phone,
            token: accessToken,
          });
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
      let newUser = {
        email: email,
        display_name: displayName,
        password: password,
        avatar: null,
        phone: null,
      };
      User.create(newUser, (err, user) => {
        if (err) res.send(err);
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
        if (err) res.send(err);
        else {
          User.findById(id, (err, usernew) => {
            if (err) res.send(err);
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
      if (err) res.send(err);
      if (user.password === password) {
        User.findByIdAndUpdate(id, { password: newpassword }, (err, users) => {
          if (err) res.send(err);
          res.status(200).json({
            message: "Thay đổi mật khẩu thành công",
          });
        });
      } else {
        return res.status(400).json({
          message: "Mật khẩu không chính xác",
        });
      }
    });
  } else {
    return res.status(400).json({
      message: "Nhập sai cú pháp, kiểm tra lại",
    });
  }
};
