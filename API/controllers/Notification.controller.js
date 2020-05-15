const fs = require("fs");
var admin = require("firebase-admin");

var serviceAccount = require("../../mytraveltrackingmap.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mytraveltrackingmap.firebaseio.com",
});

module.exports.send = (req, res) => {
  if (req.body) {
    // idHanhTrinh,title,subTitle,message,groupName,time,image
    const {
      fcmToken,
      idHanhTrinh,
      message,
      title,
      groupName,
      time,
      subTitle,
      image,
    } = req.body;
    const registrationToken = fcmToken;
    console.log(registrationToken);
    let payload = {
      notification: {
        title: title,
        body: subTitle,
      },
      data: {
        title: title,
        content: message,
        idHanhTrinh: idHanhTrinh,
        groupName: groupName,
        time: time,
        image: image,
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
        res.status(200).json({ payload });
      })
      .catch(function (error) {
        console.log("Error sending message:", error);
        res.status(400).json({ error });
      });
  }
};
