const jwt = require("jsonwebtoken");
const fs = require("fs");
const md5 = require("md5");
const User = require("../API/models/TaiKhoan.model");
// const Travel = require("../models/HanhTrinh.model");
// var nodemailer = require("nodemailer");
const accessTokenSecret = "dangcongsanvietnammuonnam";
// fake data:

module.exports.index = async (req, res) => {
  let userId = req.signedCookies.sessionId;
  try {
    const user = await User.findOne({ _id: userId, status: 1, role: 1 });
    const listUsers = await User.find(
      { role: 0 },
      "-fcmToken -password"
    ).populate("friend", "email display_name avatar phone");
    res.render("./User/index", {
      title: "Quản lý Tài khoản",
      listUsers: listUsers,
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.search = (req, res) => {
  let q = req.query.name;
  let matchedUser = users.filter(
    (e) => e.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  );
  res.render("./User/index", { users: matchedUser });
};

module.exports.userinfo = async (req, res) => {
  let userId = req.signedCookies.sessionId;
  try {
    const user = await User.findOne({ _id: userId, status: 1, role: 1 });
    const userEdit = await User.findOne(
      { _id: req.params.id },
      "-fcmToken -password"
    ).populate("friend", "email display_name avatar phone");
    res.render("./User/edit", {
      title: "Chỉnh sửa tài khoản",
      userEdit: userEdit,
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.edit = async (req, res) => {
  const { display_name, phone, password, repeatpassword } = req.body;
  let userId = req.signedCookies.sessionId;
  const userAdmin = await User.findOne({ _id: userId, status: 1, role: 1 });
  let user = await User.findOne({ _id: req.params.id });
  try {
    if (password) {
      if (password === repeatpassword) {
        user = await User.findByIdAndUpdate(
          { _id: req.params.id },
          {
            display_name: display_name,
            phone: phone,
            password: md5(password),
            update_at: Date.now(),
          }
        );
      } else {
        res.render("./User/edit", {
          title: "Chỉnh sửa tài khoản",
          userEdit: user,
          user: userAdmin,
          message: "Nhập lại mật khẩu không khớp",
          color: "color:red;",
        });
      }
    } else {
      user = await User.findByIdAndUpdate(
        { _id: req.params.id },
        {
          display_name: display_name,
          phone: phone,
          update_at: Date.now(),
        }
      );
    }
    res.render("./User/edit", {
      title: "Chỉnh sửa tài khoản",
      userEdit: user,
      user: userAdmin,
      message: "Chỉnh sửa thành công!",
    });
  } catch (error) {
    console.log(error);
    res.render("./User/edit", {
      title: "Chỉnh sửa tài khoản",
      userEdit: user,
      user: userAdmin,
      message: "Có lỗi xảy ra! Vui lòng thử lại",
      color: "color:red;",
    });
  }
};

module.exports.createGetUser = (req, res) => {
  res.render("./User/create");
};
module.exports.createPostUser = (req, res) => {
  users.push(req.body);
  res.redirect("/user");
};

module.exports.postLogin = async (req, res) => {
  try {
    const { email, password, checkbox } = req.body;
    if (email !== "admin@gmail.com") {
      res.render("index", { error: "Email không tồn tại" });
    } else if (password !== "123456") {
      res.render("index", { error: "Sai mật khẩu" });
    } else {
      let user = await User.findOne({ email: email }, "-password -fcmToken");
      if (checkbox) {
        res.cookie(
          "rememberMe",
          { email, password },
          {
            expires: new Date(Date.now() + 3600000 * 24 * 14),
            httpOnly: true,
            signed: true,
          }
        );
      }
      res.cookie("sessionId", user._id, { signed: true });
      res.redirect("/user");
    }
  } catch (error) {
    console.log(error);
    res.render("index", { error: "Có lỗi xảy ra! Vui lòng thử lại." });
  }
};

module.exports.getLogin = async (req, res) => {
  let cookie = req.signedCookies["rememberMe"];
  try {
    const { email, password } = cookie;
    if (email !== "admin@gmail.com") {
      res.render("index", { error: "Email không tồn tại" });
    } else if (password !== "123456") {
      res.render("index", { error: "Sai mật khẩu" });
    } else {
      let user = await User.findOne({ email: email }, "-password -fcmToken");
      res.cookie(
        "rememberMe",
        { email, password },
        {
          expires: new Date(Date.now() + 3600000 * 24 * 14),
          httpOnly: true,
          signed: true,
        }
      );
      res.cookie("sessionId", user._id, { signed: true });
      res.redirect("/user");
    }
  } catch (error) {
    console.log(error);
    res.render("index", { error: "Có lỗi xảy ra! Vui lòng thử lại." });
  }
};
module.exports.logout = (req, res) => {
  res.clearCookie("rememberMe");
  res.clearCookie("sessionId");
  res.redirect("/");
};
module.exports.block = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { status: 0 }
    );
    res.redirect("/user");
  } catch (error) {
    console.log(error);
    res.redirect("/user");
  }
};
module.exports.unBlock = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { status: 1 }
    );
    res.redirect("/user");
  } catch (error) {
    console.log(error);
    res.redirect("/user");
  }
};
