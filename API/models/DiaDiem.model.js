const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var destinationSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  destination_image: String,
  destination_name: String,
  longitude: Number,
  latitude: Number,
  create_at: Date,
  update_at: Date,
});
var Destination = mongoose.model("Destination", destinationSchema, "DiaDiem");
module.exports = Destination;
