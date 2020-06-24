const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  display_name: {
    type: String,
    required: true,
    max: 30,
  },
  password: {
    type: String,
    required: true,
  },
  fcmToken: String,
  friend: [{ type: String, ref: "User" }],
  phone: String,
  status: Number,
  avatar: String,
  role: Number,
  create_at: Date,
  update_at: Date,
});
var User = mongoose.model("User", userSchema, "TaiKhoan");
module.exports = User;
