const express = require("express");
const User = require("../API/models/TaiKhoan.model");

module.exports.auth = async (req, res, next) => {
  let cookie = req.signedCookies["sessionId"];
  if (!cookie) {
    res.redirect("/");
    return;
  }
  var user = await User.findOne({ _id: cookie });
  if (!user) {
    res.redirect("/");
    return;
  }
  next();
};
