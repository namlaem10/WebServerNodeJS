const mongoose = require("mongoose");
const User = require("./TaiKhoan.model");
const Schedule = require("./LichTrinh.model");
const Desination = require("./DiaDiem.model");
const TouristDesination = require("./DiemThamQuan.Model");

const Schema = mongoose.Schema;

var travelSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  departure: {
    type: String,
    ref: "Destination",
    required: true,
  },
  destination: {
    type: String,
    ref: "Destination",
    required: true,
  },
  start_day: { type: Date, required: true },
  end_day: { type: Date, required: true },
  rating: Number,
  rating_count: Number,
  title: String,
  description: String,
  price: { type: Number, required: true },
  schedule: {
    type: String,
    ref: "Schedule",
    required: true,
  },
  create_by: {
    type: String,
    ref: "User",
    required: true,
  },
  member: [{ type: String, ref: "User", required: true }],
  comment: [
    {
      avatar: String,
      username: String,
      content: String,
      create_at: Date,
    },
  ],
  background: String,
  isShare: Boolean,
  create_at: Date,
  update_at: Date,
});
var Travel = mongoose.model("Travel", travelSchema, "HanhTrinh");
module.exports = Travel;
