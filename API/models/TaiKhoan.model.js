const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
    max: 30,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  avatar: String,
  create_at: Date,
  update_at: Date,
});
var User = mongoose.model("User", userSchema, "TaiKhoan");
module.exports = User;
