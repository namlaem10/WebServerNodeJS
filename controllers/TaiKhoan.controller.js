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
    const user = await User.findOne({ _id: userId });
    const listUsers = await User.find({}, "-fcmToken -password").populate(
      "friend",
      "email display_name avatar phone"
    );
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
  const user = await User.findOne(
    { _id: req.params.id },
    "-fcmToken -password"
  ).populate("friend", "email display_name avatar phone");
  res.json(user);
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
