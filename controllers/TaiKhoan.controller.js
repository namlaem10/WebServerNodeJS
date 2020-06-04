const jwt = require("jsonwebtoken");
const fs = require("fs");
const md5 = require("md5");
const User = require("../API/models/TaiKhoan.model");
// const Travel = require("../models/HanhTrinh.model");
// var nodemailer = require("nodemailer");
const accessTokenSecret = "dangcongsanvietnammuonnam";
// fake data:
module.exports.index = async (req, res) => {
  const users = await User.find({}, "-fcmToken -password").populate(
    "friend",
    "email display_name avatar phone"
  );
  console.log(users);
  res.render("./User/index", { title: "Quản lý Tài khoản", users: users });
};

module.exports.search = (req, res) => {
  let q = req.query.name;
  let matchedUser = users.filter(
    (e) => e.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  );
  console.log(matchedUser);
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

module.exports.login = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email !== "ngocthien0507@gmail.com") {
    res.render("index", { error: "Email không tồn tại" });
  } else if (password !== "123456") {
    res.render("index", { error: "Sai mật khẩu" });
  } else {
    res.redirect("/user");
  }
};
