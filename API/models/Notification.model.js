const mongoose = require("mongoose");
const Travel = require("./HanhTrinh.model");
const User = require("./TaiKhoan.model");

var notiSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  travel: {
    type: String,
    required: true,
    ref: "Travel",
  },
  member_away: [
    {
      name: {
        type: String,
        ref: "User",
        require: true,
      },
      distance: Number,
    },
  ],
  create_at: Date,
  update_at: Date,
});
var Notification = mongoose.model("Notification", notiSchema, "ThongBao");
module.exports = Notification;
