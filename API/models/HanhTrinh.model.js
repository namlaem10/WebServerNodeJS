const mongoose = require("mongoose");

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
  start_day: Date,
  end_day: Date,
  rating: Number,
  title: String,
  description: String,
  price: Number,
  schedule: {
    type: String,
    ref: "Schedule",
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
