const fs = require("fs");
const Travel = require("../models/HanhTrinh.model");
const Schedule = require("../models/LichTrinh.model");
const User = require("../models/TaiKhoan.model");

module.exports.all = (req, res) => {
  Travel.find({})
    .populate("create_by", "-_id -password")
    .populate("destination", "-_id")
    .populate("departure", "-_id")
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_1",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_2",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_3",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_4",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_5",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_6",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_7",
        select: "-destination",
      },
    })
    .populate("member", "-_id -password")
    .sort({ create_at: -1 })
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
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_2",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_3",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_4",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_5",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_6",
        select: "-destination",
      },
    })
    .populate({
      path: "schedule",
      populate: {
        path: "schedule_detail.day_7",
        select: "-destination",
      },
    })
    .populate("member", "-_id -password")
    .sort({ create_at: -1 })
    .exec((err, travel) => {
      if (err) res.send(err);
      else {
        res.status(200).json(travel);
      }
    });
};

module.exports.create = async (req, res) => {
  const id = req.user.idUser;
  const member = req.body.member ? req.body.member : [];
  member.unshift(id);
  if (req.body) {
    if (req.file) {
      const tempPath = req.file.path;
      const targetName = `public/uploads/${req.file.filename}.${
        req.file.mimetype.split("/")[1]
      }`;
      fs.rename(tempPath, targetName, (err) => {
        if (err)
          res.status(500).json({
            message: "Oops! Something went wrong!",
          });
      });
    }
    const lastest = await Schedule.findOne().sort({ _id: -1 });
    const new_id = parseInt(lastest._id.split("T")[1]) + 1;
    const schedule = new Schedule({
      _id: new_id < 10 ? `LT0${new_id}` : `LT${new_id}`,
      destination: req.body.destination,
      number_of_days: Object.keys(req.body.schedule_detail).length,
      schedule_detail: req.body.schedule_detail,
      status: "created",
      create_at: new Date().toLocaleString(),
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
        member: member,
        create_at: new Date().toLocaleString(),
        update_at: null,
        isShare: false,
        create_by: id,
        background: req.file
          ? `uploads/${req.file.filename}.${req.file.mimetype.split("/")[1]}`
          : null,
      });
      travel.save((err3) => {
        if (err3) res.status(400).send(err3);
        Travel.findById(travel._id, (err, travel_new) => {
          if (err) res.status(400).send(err);
          res.status(200).json(travel_new);
        });
      });
    });
  } else {
    res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
  }
};

module.exports.remove = (req, res) => {
  const id = req.params.id;
  if (id) {
    Travel.findById(id, (err, travel) => {
      if (err) res.status(400).send(err);
      if (travel) {
        Travel.deleteOne({ _id: travel._id }, (err) => {
          if (err) res.status(400).send(err);
          else {
            Schedule.deleteOne({ _id: travel.schedule }, (err) => {
              if (err) res.status(400).send(err);
              res.status(200).json({
                message: "Xóa hành trình thành công",
              });
            });
          }
        });
      } else {
        res.status(400).json({ message: "Đã có lỗi xảy ra, vui lòng thử lại" });
      }
    });
  } else {
    res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
  }
};

module.exports.update = (req, res) => {
  const idUser = req.user.idUser;
  const member = req.body.member ? req.body.member : [];
  member.unshift(idUser);
  const id = req.params.id;
  if (id) {
    Travel.findById(id, (err, travel) => {
      if (err) res.status(400).send(err);
      if (req.body.member) {
        Travel.updateOne(
          { _id: id },
          {
            member: member,
            update_at: new Date().toLocaleString(),
          },
          (err) => {
            if (err) res.status(400).send(err);
          }
        );
      }
      if (travel) {
        const updateSchedule = {
          schedule_detail: req.body.schedule_detail,
          update_at: new Date().toLocaleString(),
        };
        Schedule.updateOne({ _id: travel.schedule }, updateSchedule, (err) => {
          if (err) res.status(400).send(err);
          res.status(200).json({ message: "Cập nhật lịch trình thành công" });
        });
      } else {
        res.status(400).json({ message: "Đã có lỗi xảy ra, vui lòng thử lại" });
      }
    });
  } else {
    res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
  }
};

module.exports.comment = async (req, res) => {
  const idUser = req.user.idUser;
  const user = await User.findOne({ _id: idUser });
  const idTravel = req.params.id;
  const new_comment = {
    avatar: user.avatar,
    username: user.display_name,
    content: req.body.content,
    create_at: new Date().toLocaleString(),
  };
  Travel.findById(idTravel, (err, travel) => {
    if (err) res.status(400).send(err);
    Travel.updateOne(
      { _id: idTravel },
      { comment: [...travel.comment, new_comment] },
      (err) => {
        if (err) res.status(400).send(err);
        res.status(200).json({ message: "Cập nhật comment thành công" });
      }
    );
  });
};
