const mongoose = require("mongoose");
const Travel = require("./HanhTrinh.model");
const User = require("./TaiKhoan.model");
const Schema = mongoose.Schema;

var reportSchema = new Schema({
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
  reason: String,
  reporter: {
    type: String,
    required: true,
    ref: "User",
  },
  create_at: Date,
  solve_at: Date,
  isSolve: Boolean,
});
var Report = mongoose.model("Report", reportSchema, "BaoCao");
module.exports = Report;
