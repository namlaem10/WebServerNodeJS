const jwt = require("jsonwebtoken");
const fs = require("fs");
const md5 = require("md5");
const User = require("../API/models/TaiKhoan.model");
const Travel = require("../API/models/HanhTrinh.model");
// var nodemailer = require("nodemailer");
const accessTokenSecret = "dangcongsanvietnammuonnam";
// fake data:

module.exports.index = async (req, res) => {
  let userId = req.signedCookies.sessionId;
  try {
    const user = await User.findOne({ _id: userId, status: 1, role: 1 });
    const listHt = await Travel.find({}).populate(
      "create_by",
      "-friend -password -fcmToken"
    );
    listHt.sort(function (a, b) {
      return b.share_at - a.share_at;
    });
    res.render("./Tour/index", {
      title: "Quản lý Hành trình",
      listHT: listHt,
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.block = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(
      { _id: req.params.id },
      { is_hidden: true }
    );
    res.redirect("/tour");
  } catch (error) {
    console.log(error);
    res.redirect("/tour");
  }
};
module.exports.unBlock = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(
      { _id: req.params.id },
      { is_hidden: false }
    );
    res.redirect("/tour");
  } catch (error) {
    console.log(error);
    res.redirect("/tour");
  }
};

module.exports.travelDetail = async (req, res) => {
  let userId = req.signedCookies.sessionId;
  try {
    const user = await User.findOne({ _id: userId, status: 1, role: 1 });
    const travel = await Travel.findOne({ _id: req.params.id })
      .populate({
        path: "schedule",
        populate: {
          path: "copy_reference",
          select: "create_by schedule",
          populate: {
            path: "create_by",
            select: "display_name",
          },
        },
      })
      .populate({
        path: "schedule",
        populate: {
          path: "schedule_detail.day_1",
          populate: {
            path: "rating_history.user",
            select: "_id display_name avatar",
          },
          select: "-destination",
        },
      })
      .populate({
        path: "schedule",
        populate: {
          path: "schedule_detail.day_2",
          populate: {
            path: "rating_history.user",
            select: "_id display_name avatar",
          },
          select: "-destination",
        },
      })
      .populate({
        path: "schedule",
        populate: {
          path: "schedule_detail.day_3",
          populate: {
            path: "rating_history.user",
            select: "_id display_name avatar",
          },
          select: "-destination",
        },
      })
      .populate({
        path: "schedule",
        populate: {
          path: "schedule_detail.day_4",
          populate: {
            path: "rating_history.user",
            select: "_id display_name avatar",
          },
          select: "-destination",
        },
      })
      .populate({
        path: "schedule",
        populate: {
          path: "schedule_detail.day_5",
          populate: {
            path: "rating_history.user",
            select: "_id display_name avatar",
          },
          select: "-destination",
        },
      })
      .populate({
        path: "schedule",
        populate: {
          path: "schedule_detail.day_6",
          populate: {
            path: "rating_history.user",
            select: "_id display_name avatar",
          },
          select: "-destination",
        },
      })
      .populate({
        path: "schedule",
        populate: {
          path: "schedule_detail.day_7",
          populate: {
            path: "rating_history.user",
            select: "_id display_name avatar",
          },
          select: "-destination",
        },
      });
    let day = req.params.day;
    let endDate = new Date(travel.end_day);
    let startDate = new Date(travel.start_day);
    let number_of_days = new Date(endDate - startDate).getDate();
    res.render("./Tour/detail", {
      title: "Chi tiết hành trình",
      travel: travel,
      schedule: travel.schedule.schedule_detail[day],
      user: user,
      nod: number_of_days,
      day: parseInt(day.charAt(4)),
    });
  } catch (error) {
    console.log(error);
  }
};
