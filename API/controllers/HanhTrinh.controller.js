const fs = require("fs");
const fetch = require("node-fetch");
const Travel = require("../models/HanhTrinh.model");
const Schedule = require("../models/LichTrinh.model");
const User = require("../models/TaiKhoan.model");
const Destination = require("../models/DiaDiem.model");
const Report = require("../models/BaoCao.model");

module.exports.saleman = async (req, res) => {
  const schedule = await Schedule.findOne(
    {
      status: "suggested",
      destination: "DALAT",
      number_of_days: parseInt(7),
    },
    "schedule_detail _id"
  )
    .populate("schedule_detail.day_1", "_id location")
    .populate("schedule_detail.day_2", "_id location")
    .populate("schedule_detail.day_3", "_id location")
    .populate("schedule_detail.day_4", "_id location")
    .populate("schedule_detail.day_5", "_id location")
    .populate("schedule_detail.day_6", "_id location")
    .populate("schedule_detail.day_7", "_id location");
  const schedule_detail = schedule.toJSON().schedule_detail;
  getMinLocation = async (array, new_destination) => {
    const array_distance = Promise.all(
      array.map(async (item) => {
        const link = `https://route.ls.hereapi.com/routing/7.2/calculateroute.json?apiKey=Hkbvju0uKF1GS4Ex45IGlrxvZC7c2Vx0So2B8yPnRnU&waypoint0=geo!${new_destination.location.latitude},${new_destination.location.longitude}&waypoint1=geo!${item.location.latitude},${item.location.longitude}&mode=fastest;car;traffic:disabled`;
        let response = await fetch(link);
        let responseJson = await response.json();
        let routes = responseJson.response.route[0].summary.distance;
        return routes;
      })
    );
    const min_distance = await array_distance;
    return min_distance.indexOf(Math.min(...min_distance));
  };
  const new_schedule_detail = {};
  for (const key in schedule_detail) {
    if (schedule_detail[key].length > 0) {
      const place_start = schedule_detail[key][0];
      schedule_detail[key].shift();
      const distance_sort = [];
      var temp_array = [];
      distance_sort.push(place_start);
      while (schedule_detail[key].length > 0) {
        var temp = await getMinLocation(
          schedule_detail[key],
          temp_array[0] || distance_sort[0]
        );
        distance_sort.push(schedule_detail[key][temp]);
        temp_array = schedule_detail[key].splice(temp, 1);
      }
      new_schedule_detail[`${key}`] = distance_sort;
    }
  }
  res.json(new_schedule_detail);
};

module.exports.get = (req, res) => {
  const id = req.params.id;
  Travel.findOne({ _id: id })
    .populate("create_by", "-friend -password -fcmToken")
    .populate("destination", "-_id")
    .populate("departure", "-_id")
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
    .sort({ create_at: -1 })
    .exec((err, travel) => {
      if (err) res.status(400).send(err);
      else {
        res.status(200).json(travel);
      }
    });
};

module.exports.all = (req, res) => {
  Travel.find({})
    .populate("create_by", "-friend -password -fcmToken")
    .populate("destination", "-_id")
    .populate("departure", "-_id")
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
          options: { limit: 1 },
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
    })
    .populate("member", "email display_name avatar phone")
    .sort({ share_at: -1 })
    .exec((err, travel) => {
      if (err) res.status(400).send(err);
      else {
        let hottravels = travel.filter(
          (item) => item.schedule.copy_list.length > 0
        );
        hottravels.sort(function (a, b) {
          return b.schedule.copy_list.length - a.schedule.copy_list.length;
        });
        res.status(200).json({ all: travel, hot: hottravels });
      }
    });
};

module.exports.own = (req, res) => {
  const id = req.user.idUser;
  Travel.find({ member: id })
    .populate("create_by", "-friend -password -fcmToken")
    .populate("destination", "-_id")
    .populate("departure", "-_id")
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
    })
    .populate("member", "email display_name avatar phone")
    .sort({ create_at: -1 })
    .exec((err, travel) => {
      if (err) res.status(400).send(err);
      else {
        res.status(200).json(travel);
      }
    });
};
module.exports.create = async (req, res) => {
  const id = req.user.idUser;
  const destination = await Destination.findOne(
    { _id: req.body.destination },
    "destination_image"
  );
  const member = req.body.member ? req.body.member : [];
  member.unshift(id);
  if (req.body) {
    const all_schedule = await Schedule.find({}, "_id");
    all_schedule.sort(function (a, b) {
      let numa = parseInt(a._id.substring(2, a._id.length));
      let numb = parseInt(b._id.substring(2, b._id.length));
      return numb - numa;
    });
    const new_id =
      all_schedule.length === 0
        ? 1
        : parseInt(all_schedule[0]._id.split("T")[1]) + 1;
    let endDate = new Date(req.body.end_day);
    let startDate = new Date(req.body.start_day);
    let number_of_days = new Date(endDate - startDate).getDate();
    const schedule = new Schedule({
      _id: new_id < 10 ? `LT0${new_id}` : `LT${new_id}`,
      destination: req.body.destination,
      number_of_days: number_of_days,
      schedule_detail: req.body.schedule_detail,
      status: "created",
      copy_reference: null,
      copy_list: [],
      create_at: new Date().toLocaleString(),
      update_at: null,
    });
    schedule.save(async (err) => {
      if (err) res.status(400).send(err);
      if (req.body.schedule_reference) {
        const schedule_reference_find = await Schedule.findOne({
          _id: req.body.schedule_reference,
        });
        if (
          JSON.stringify(schedule.schedule_detail) ===
          JSON.stringify(schedule_reference_find.schedule_detail)
        ) {
          // Trùng nhau => có copy
          schedule_reference_find.copy_list = [
            ...schedule_reference_find.copy_list,
            schedule._id,
          ];
          try {
            await schedule_reference_find.save();
            schedule.copy_reference = req.body.copy_reference;
            await schedule.save();
          } catch (err) {
            res.status(400).send(err);
          }
        }
      }
      const all_travel = await Travel.find();
      all_travel.sort(function (a, b) {
        let numa = parseInt(a._id.substring(2, a._id.length));
        let numb = parseInt(b._id.substring(2, b._id.length));
        return numb - numa;
      });
      const new_id =
        all_travel.length === 0
          ? 1
          : parseInt(all_travel[0]._id.split("T")[1]) + 1;
      const travel = new Travel({
        _id: new_id < 10 ? `HT0${new_id}` : `HT${new_id}`,
        departure: req.body.departure,
        destination: req.body.destination,
        start_day: req.body.start_day,
        end_day: req.body.end_day,
        rating: req.body.rating,
        rating_count: 0,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        schedule: schedule._id,
        member: member,
        create_at: new Date().toLocaleString(),
        update_at: null,
        isShare: false,
        create_by: id,
        is_hidden: false,
        background: destination.toJSON().destination_image,
        share_at: null,
      });
      travel.save((err) => {
        if (err) res.status(400).send(err);
        Travel.find({ _id: travel._id })
          .populate("create_by", "-friend -password -fcmToken")
          .populate("destination", "-_id")
          .populate("departure", "-_id")
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
              res.status(200).json(travel_new);
            }
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
  const member = req.body.member
    ? req.body.member[0] === "null"
      ? []
      : req.body.member
    : [];
  member.unshift(idUser);
  const id = req.params.id;
  if (id) {
    Travel.findById(id, (err, travel) => {
      if (err) res.status(400).send(err);
      if (req.body.member || req.body.schedule_detail) {
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
        if (req.body.schedule_detail) {
          const updateSchedule = {
            schedule_detail: req.body.schedule_detail,
            update_at: new Date().toLocaleString(),
          };
          Schedule.updateOne(
            { _id: travel.schedule },
            updateSchedule,
            (err) => {
              if (err) res.status(400).send(err);
            }
          );
        }
        Travel.find({ _id: id })
          .populate("create_by", "-friend -password -fcmToken")
          .populate("destination", "-_id")
          .populate("departure", "-_id")
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
          .exec((err, travel_update) => {
            if (err) res.status(400).send(err);
            else {
              res.status(200).json(travel_update);
            }
          });
      } else {
        res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
      }
    });
  } else {
    res.status(400).json({ message: "Sai cú pháp, kiểm tra và thử lại" });
  }
};

module.exports.blog = (req, res) => {
  const idTravel = req.params.id;
  const url = req.url;
  const updateBlogWithBackground = {
    title: req.body.title,
    description: req.body.description,
    background: url,
    isShare: true,
    share_at: new Date().toLocaleString(),
    update_at: new Date().toLocaleString(),
  };
  const updateBlogNoneBackground = {
    title: req.body.title,
    description: req.body.description,
    isShare: true,
    share_at: new Date().toLocaleString(),
    update_at: new Date().toLocaleString(),
  };
  Travel.findByIdAndUpdate(
    idTravel,
    req.file ? updateBlogWithBackground : updateBlogNoneBackground,
    (err, travel) => {
      if (err) res.status(400).send(err);
      Travel.find({ _id: travel._id })
        .populate("create_by", "-friend -password -fcmToken")
        .populate("destination", "-_id")
        .populate("departure", "-_id")
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
            res.status(200).json(travel_new);
          }
        });
    }
  );
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
  console.log(new_comment);
  Travel.findById(idTravel, (err, travel) => {
    if (err) res.status(400).send(err);
    Travel.updateOne(
      { _id: idTravel },
      { comment: [...travel.comment, new_comment] },
      (err) => {
        if (err) res.status(400).send(err);
        Travel.findOne(
          { _id: travel._id },
          "comment -_id",
          (err, newcomment) => {
            if (err) res.status(400).send(err);
            res.status(200).json(newcomment);
          }
        );
      }
    );
  });
};

module.exports.rating = async (req, res) => {
  const idUser = req.user.idUser;
  const user = await User.findOne({ _id: idUser });
  const idTravel = req.params.id;
  const new_rating = {
    id_user: idUser,
    avatar: user.avatar,
    username: user.display_name,
    rating: req.body.rating,
    create_at: new Date().toLocaleString(),
  };
  Travel.findById(idTravel, (err, travel) => {
    if (err) res.status(400).send(err);
    else {
      var total = 0;
      if (travel.rating_history.length !== 0) {
        travel.rating_history.filter((item) => {
          if (item) return (total += item.rating);
        });
      }
      let checkTravelRatingHistory = travel.rating_history.filter((item) => {
        return item.id_user === idUser;
      });
      if (checkTravelRatingHistory.length > 0) {
        let curRating = 0;
        let newRatingHistory = travel.rating_history;
        newRatingHistory.map((item) => {
          if (item._id === checkTravelRatingHistory[0]._id) {
            curRating = item.rating;
            item.rating = req.body.rating;
          }
        });
        ratingPoint =
          total === 0
            ? +req.body.rating
            : Math.round(
                (total + +req.body.rating - +curRating) / travel.rating_count
              );
        console.log(req.body.rating, curRating, ratingPoint);
        Travel.updateOne(
          { _id: idTravel },
          {
            rating_history: newRatingHistory,
            rating: ratingPoint,
          },
          (err) => {
            if (err) res.status(400).send(err);
            Travel.findOne(
              { _id: travel._id },
              "rating rating_count rating_history -_id",
              (err, newrating) => {
                if (err) res.status(400).send(err);
                res.status(200).json(newrating);
              }
            );
          }
        );
      } else {
        Travel.updateOne(
          { _id: idTravel },
          {
            rating_history: [...travel.rating_history, new_rating],
            rating_count: travel.rating_count + 1,
            rating:
              total === 0
                ? +req.body.rating
                : Math.round(
                    (total + +req.body.rating) / (travel.rating_count + 1)
                  ),
          },
          (err) => {
            if (err) res.status(400).send(err);
            Travel.findOne(
              { _id: travel._id },
              "rating rating_count rating_history -_id",
              (err, newrating) => {
                if (err) res.status(400).send(err);
                res.status(200).json(newrating);
              }
            );
          }
        );
      }
    }
  });
};

module.exports.report = async (req, res) => {
  const userID = req.user.idUser;
  const all_report = await Report.find();
  all_report.sort(function (a, b) {
    let numa = parseInt(a._id.substring(2, a._id.length));
    let numb = parseInt(b._id.substring(2, b._id.length));
    return numb - numa;
  });
  const new_id =
    all_report.length === 0 ? 1 : parseInt(all_report[0]._id.split("P")[1]) + 1;
  const report = new Report({
    _id: new_id < 10 ? `RP0${new_id}` : `RP${new_id}`,
    travel: req.body.travel,
    reporter: userID,
    reason: req.body.reason,
    create_at: new Date(),
    solve_at: null,
    isSolve: false,
  });
  report.save((err) => {
    if (err) res.status(400).send(err);
    else {
      res.status(200).json({ message: "success" });
    }
  });
};
