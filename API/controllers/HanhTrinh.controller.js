const jwt = require("jsonwebtoken");
const fs = require("fs");
const User = require("../models/TaiKhoan.model");
const Travel = require("../models/HanhTrinh.model");
const Schedule = require("../models/LichTrinh.model");
const Desination = require("../models/DiaDiem.model");
const TouristDesination = require("../models/DiemThamQuan.Model");

module.exports.all = (req, res) => {
  Travel.find({})
    .populate("create_by", "-_id -password")
    .populate("destination", "-_id")
    .populate("departure", "-_id")
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_1",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_2",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_3",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_4",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_5",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_6",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_7",
        select: "-_id -destination",
      },
    })
    .exec((err, travel) => {
      if (err) res.send(err);
      else {
        res.status(200).json(travel);
      }
    });
};

module.exports.own = (req, res) => {
  const id = req.user.idUser;
  Travel.find({ create_by: id })
    .populate("create_by", "-_id -password")
    .populate("destination", "-_id")
    .populate("departure", "-_id")
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_1",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_2",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_3",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_4",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_5",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_6",
        select: "-_id -destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_7",
        select: "-_id -destination",
      },
    })
    .exec((err, travel) => {
      if (err) res.send(err);
      else {
        res.status(200).json(travel);
      }
    });
};

module.exports.create = (req, res) => {
  // const id = req.user.idUser;
  console.log(req.body);
  res.send("a");
};
