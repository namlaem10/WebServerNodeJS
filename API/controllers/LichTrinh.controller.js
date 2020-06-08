const fs = require("fs");
const Schedule = require("../models/LichTrinh.model");

module.exports.suggest = (req, res) => {
  const { destination, day } = req.query;
  if (parseInt(day) <= 7) {
    Schedule.find({
      status: "suggested",
      destination: destination,
      number_of_days: parseInt(day),
    })
      .populate("schedule_detail.day_1")
      .populate("schedule_detail.day_2")
      .populate("schedule_detail.day_3")
      .populate("schedule_detail.day_4")
      .populate("schedule_detail.day_5")
      .populate("schedule_detail.day_6")
      .populate("schedule_detail.day_7")
      .populate("destination", "-_id")
      .exec((err, schedule) => {
        if (err) res.status(400).send(err);
        res.status(200).json(schedule);
      });
  } else {
    res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
  }
};
