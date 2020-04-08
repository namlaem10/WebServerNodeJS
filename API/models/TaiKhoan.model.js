const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  displayName: String,
  password: String,
  phone: String,
  avatar: String,
});
var User = mongoose.model("User", userSchema, "TaiKhoan");
module.exports = User;
