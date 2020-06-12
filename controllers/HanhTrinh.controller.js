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
    // const listUsers = await User.find(
    //   { role: 0 },
    //   "-fcmToken -password"
    // ).populate("friend", "email display_name avatar phone");
    res.render("./Tour/index", {
      title: "Quản lý Hành trình",
      //   listHT: listHt,
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};
