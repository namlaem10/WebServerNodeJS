const fs = require("fs");
var admin = require("firebase-admin");

var serviceAccount = require("../../mytraveltrackingmap.json");
const Travel = require("../models/HanhTrinh.model");
const Notification = require("../models/Notification.model");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mytraveltrackingmap.firebaseio.com",
});

module.exports.get = async (req, res) => {
  const id = req.user.idUser;
  const noti_find = await Notification.find({ member: id })
    .populate("member_away.name", "-_id display_name")
    .sort({ create_at: -1 })
    .limit(10);
  const result = await Promise.all(
    noti_find.map(async (item) => {
      const member_away = item.member_away.map((item) => {
        var object_return = {
          name: item.name.display_name,
          distance: item.distance,
        };
        return object_return;
      });
      const travelfind = await Travel.findOne({ _id: item.travel })
        .populate("create_by", "-friend -password -fcmToken")
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
        .populate("member", "email display_name avatar phone");
      return {
        _id: item._id,
        create_at: item.create_at,
        travel: travelfind,
        member_away: member_away,
      };
    })
  );
  res.status(200).json(result);
};

module.exports.send = async (req, res) => {
  const id = req.params.id;
  const { member_away, member } = req.body;
  if (req.body && id) {
    const user = await Travel.findOne({ _id: id }, "member").populate(
      "member",
      "fcmToken"
    );
    const fcmTokenArray = user.member.map((item) => {
      if (item.fcmToken != null) return item.fcmToken;
    });
    const registrationToken = fcmTokenArray.filter((item) => {
      return item != null;
    });
    const all_noti = await Notification.find();
    const lastest_id = all_noti.reverse();
    const new_id =
      all_noti.length === 0 ? 1 : parseInt(lastest_id[0]._id.split("B")[1]) + 1;
    const noti = new Notification({
      _id: new_id < 10 ? `TB0${new_id}` : `TB${new_id}`,
      travel: id,
      member: member,
      member_away: member_away,
      create_at: new Date().toLocaleString(),
      update_at: null,
    });
    noti.save(async (err) => {
      if (err) res.status(400).send(err);
      else {
        const noti_find = await Notification.findOne(
          { _id: noti._id },
          "-_id member_away"
        ).populate("member_away.name", "-_id display_name");
        const member_away_return = [];
        noti_find.member_away.map((item) => {
          var object_return = {
            name: item.name.display_name,
            distance: item.distance,
          };
          member_away_return.push(object_return);
        });
        let payload = {
          notification: {
            title: "Cảnh báo",
            body: "Có thành viên đang cách xa nhóm trưởng",
          },
          data: {
            title: "Cảnh báo",
            content: "Có thành viên đang cách xa nhóm trưởng",
            idHanhTrinh: id,
            time: new Date().toLocaleString(),
            member_away: JSON.stringify(member_away_return),
          },
        };
        let options = {
          priority: "normal",
          timeToLive: 60 * 60,
        };
        admin
          .messaging()
          .sendToDevice(registrationToken, payload, options)
          .then(function (response) {
            console.log("Successfully sent message:", response);
            res.status(200).json({ message: "Gửi thành công" });
          })
          .catch(function (error) {
            console.log("Error sending message:", error);
            res.status(400).json({ error });
          });
      }
    });
  }
};
