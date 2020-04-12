const mongoose = require("mongoose");

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
  tourist_destintion_name: String,
  tourist_destintion_address: String,
  tourist_destintion_image: String,
  create_at: Date,
  update_at: Date,
});
var TouristDesination = mongoose.model(
  "TouristDesination",
  touristDestinationSchema,
  "DiemThamQuan"
);
module.exports = TouristDesination;
