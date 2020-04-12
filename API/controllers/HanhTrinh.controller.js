const jwt = require("jsonwebtoken");
const fs = require("fs");
const Travel = require("../models/HanhTrinh.model");
const Schedule = require("../models/LichTrinh.model");

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

module.exports.create = async (req, res) => {
  const id = req.user.idUser;
  if (req.body) {
    const lastest = await Schedule.findOne().sort({ _id: -1 });
    const new_id = parseInt(lastest._id.split("T")[1]) + 1;
    const schedule = new Schedule({
      _id: new_id < 10 ? `LT0${new_id}` : `LT${new_id}`,
      destination: req.body.destination,
      number_of_days: Object.keys(req.body.schedule_detail).length,
      schedule_detail: req.body.schedule_detail,
      create_at: req.body.create_at,
      update_at: null,
    });
    schedule.save(async (err2) => {
      if (err2) res.status(400).send(err2);
      const lastest = await Travel.findOne().sort({ _id: -1 });
      const new_id = parseInt(lastest._id.split("T")[1]) + 1;
      const travel = new Travel({
        _id: new_id < 10 ? `HT0${new_id}` : `HT${new_id}`,
        departure: req.body.departure,
        destination: req.body.destination,
        start_day: req.body.start_day,
        end_day: req.body.end_day,
        rating: req.body.rating,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        schedule: schedule._id,
        create_at: req.body.create_at,
        update_at: null,
        create_by: id,
        background: req.file
          ? `uploads/${req.file.filename}.${req.file.mimetype.split("/")[1]}`
          : null,
      });
      travel.save((err3) => {
        res.status(200).json({
          message: "success",
        });
      });
    });
  }
};

module.exports.update = (req, res) => {};

module.exports.remove = (req, res) => {};
