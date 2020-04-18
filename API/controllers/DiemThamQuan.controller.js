const fs = require("fs");
const TouristDestination = require("../models/DiemThamQuan.Model");

module.exports.destination = (req, res) => {
  const id = req.params.destination;
  if (id) {
    TouristDestination.find({ destination: id }, (err, tourist_destination) => {
      if (err) res.status(400).send(err);
      else res.status(200).json(tourist_destination);
    });
  } else {
    res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
  }
};
