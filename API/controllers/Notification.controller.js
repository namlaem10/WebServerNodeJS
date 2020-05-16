const fs = require("fs");
var admin = require("firebase-admin");

var serviceAccount = require("../../mytraveltrackingmap.json");
const Travel = require("../models/HanhTrinh.model");
const Notification = require("../models/Notification.model");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mytraveltrackingmap.firebaseio.com",
});

module.exports.send = async (req, res) => {
  const id = req.params.id;
  // console.log(req.body.member_away);
  const { member_away } = req.body;
  if (req.body && id) {
    const registrationToken = [
      "dvqJ3_ACGBk:APA91bFCjelZ_3HgKnDviBHbhn9x8XRYKOlt8JTOAMFAgixzf0GgJ3oZddrFb7DCjAaxG4JBnjCNmH2rIE_dQj55-l0wcBxuhLsb6jcBI8Ma2nL5nHPhA773-61gqW56D5orqugPbFiD",
    ];
    // console.log(registrationToken);
    let payload = {
      notification: {
        title: "Cảnh báo",
        body: "Có thành viên đang tách nhóm",
      },
      data: {
        title: "Cảnh báo",
        content: "Có thành viên đang tách nhóm",
        idHanhTrinh: id,
        time: new Date().toLocaleString(),
      },
    };
    let options = {
      priority: "normal",
      timeToLive: 60 * 60,
    };
    const lastest = await Notification.findOne().sort({ _id: -1 });
    const new_id =
      lastest === null ? 1 : parseInt(lastest._id.split("B")[1]) + 1;
    admin
      .messaging()
      .sendToDevice(registrationToken, payload, options)
      .then(function (response) {
        console.log("Successfully sent message:", response);
        const noti = new Notification({
          _id: new_id < 10 ? `TB0${new_id}` : `TB${new_id}`,
          travel: id,
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
            Travel.findOne({ _id: id })
              .populate("create_by", "-friend -password")
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
              .populate("member", "email display_name avatar phone")
              .exec((err, travel_new) => {
                if (err) res.status(400).send(err);
                else {
                  res.status(200).json({
                    member_away: member_away_return,
                    travel: travel_new,
                  });
                }
              });
          }
        });
      })
      .catch(function (error) {
        console.log("Error sending message:", error);
        res.status(400).json({ error });
      });
  }
};
