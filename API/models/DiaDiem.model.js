const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var destinationSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  destination_name: String,
  create_at: Date,
  update_at: Date,
});
var Destination = mongoose.model("Destination", destinationSchema, "DiaDiem");
module.exports = Destination;
