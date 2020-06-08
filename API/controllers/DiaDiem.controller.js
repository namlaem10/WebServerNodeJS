const fs = require("fs");
const Destination = require("../models/DiaDiem.model");

module.exports.all = (req, res) => {
  Destination.find({}, (err, destination) => {
    if (err) res.status(400).send(err);
    res.json(destination);
  });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const url = req.url;
  if (req.body) {
    const destination_update_image = {
      destination_name: req.body.destination_name,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      destination_image: url,
      update_at: new Date().toLocaleString(),
    };
    const destination_update_non_image = {
      destination_name: req.body.destination_name,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      update_at: new Date().toLocaleString(),
    };
    Destination.findByIdAndUpdate(
      id,
      req.file ? destination_update_image : destination_update_non_image,
      (err) => {
        if (err) res.status(400).send(err);
        else {
          Destination.findById(id, (err, destination) => {
            if (err) res.status(400).send(err);
            res.json(destination);
          });
        }
      }
    );
  } else {
    return res.status(400).json({
      message: "Nhập sai cú pháp, kiểm tra lại",
    });
  }
};
