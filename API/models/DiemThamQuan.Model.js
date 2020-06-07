const mongoose = require("mongoose");
const User = require("./TaiKhoan.model");
const Destination = require("./DiaDiem.model");

const Schema = mongoose.Schema;

var touristDestinationSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  destination: {
    type: String,
    ref: "Destination",
    required: true,
  },
  tourist_destination_name: String,
  tourist_destination_address: String,
  tourist_destination_image: String,
  rating: Number,
  rating_count: Number,
  rating_history: [
    {
      user: { type: String, ref: "User" },
      rating: Number,
      create_at: Date,
    },
  ],
  rating_list: [
    {
      user: { type: String, ref: "User" },
      rating: Number,
      create_at: Date,
    },
  ],
  create_at: Date,
  update_at: Date,
});
var TouristDesination = mongoose.model(
  "TouristDesination",
  touristDestinationSchema,
  "DiemThamQuan"
);
module.exports = TouristDesination;
