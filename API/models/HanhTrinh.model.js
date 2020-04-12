const mongoose = require("mongoose");
const User = require("./TaiKhoan.model");
const Schedule = require("./LichTrinh.model");
const Desination = require("./DiaDiem.model");

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
  background: String,
  create_at: Date,
  update_at: Date,
});
var Travel = mongoose.model("Travel", travelSchema, "HanhTrinh");
module.exports = Travel;