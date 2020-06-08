const fs = require("fs");
const TouristDestination = require("../models/DiemThamQuan.Model");

module.exports.uploadimage = (req, res) => {
  const url = req.url;
  const idTouristDestination = req.params.id;
  const image_upload = {
    tourist_destination_image: url,
  };
  TouristDestination.updateOne(
    { _id: idTouristDestination },
    image_upload,
    (err) => {
      if (err) res.status(400).send(err);
      TouristDestination.findOne({ _id: idTouristDestination })
        .populate({
          path: "rating_history.user",
          select: "_id display_name avatar",
          options: { limit: 5 },
        })
        .populate("rating_list.user", "_id display_name avatar")
        .exec((err, tourist_update) => {
          if (err) res.status(400).send(err);
          else {
            res.status(200).json(tourist_update);
          }
        });
    }
  );
};

module.exports.destination = (req, res) => {
  const id = req.params.destination;
  if (id) {
    TouristDestination.find({ destination: id })
      .populate({
        path: "rating_history.user",
        select: "_id display_name avatar",
        options: { limit: 1 },
      })
      .populate("rating_list.user", "_id display_name avatar")
      .exec((err, newrating) => {
        if (err) res.status(400).send(err);
        else {
          res.status(200).json(newrating);
        }
      });
  } else {
    res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
  }
};

module.exports.rating = (req, res) => {
  const idDestination = req.params.id;
  const idUser = req.user.idUser;
  const rating = req.body.rating;
  const new_rating = {
    user: idUser,
    rating: +rating,
    create_at: new Date().toLocaleString(),
  };
  TouristDestination.findById(idDestination, (err, tourist_destination) => {
    if (err) res.status(400).send(err);
    else {
      var new_rating_history = [
        ...tourist_destination.rating_history,
        new_rating,
      ];
      var groupby_rating_history = new_rating_history.reduce(function (
        acc,
        obj
      ) {
        let key = obj["user"];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      },
      {});
      var array_caculator = [];
      for (var key in groupby_rating_history) {
        array_caculator.push(
          groupby_rating_history[key][groupby_rating_history[key].length - 1]
        );
      }
      const tourist_destination_update = {
        rating_history: new_rating_history,
        rating_count: array_caculator.length,
        rating_list: array_caculator,
        rating: Math.round(
          array_caculator.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.rating;
          }, 0) / array_caculator.length
        ),
      };
      TouristDestination.updateOne(
        { _id: tourist_destination._id },
        tourist_destination_update,
        (err) => {
          if (err) res.status(400).send(err);
          TouristDestination.findOne(
            { _id: tourist_destination._id },
            "rating rating_count rating_history rating_list _id"
          )
            .populate({
              path: "rating_history.user",
              select: "_id display_name avatar",
              options: { limit: 5 },
            })
            .populate("rating_list.user", "_id display_name avatar")
            .exec((err, newrating) => {
              if (err) res.status(400).send(err);
              else {
                res.status(200).json(newrating);
              }
            });
        }
      );
    }
  });
};
