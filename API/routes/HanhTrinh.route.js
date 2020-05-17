const express = require("express");
const multer = require("multer");

const controller = require("../controllers/HanhTrinh.controller");
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const {
  all,
  own,
  create,
  update,
  remove,
  comment,
  blog,
  rating,
  get,
} = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.get("/get/:id", authenticationMiddleware, get);

route.get("/all", authenticationMiddleware, all);

route.get("/own", authenticationMiddleware, own);

route.put("/update/:id", authenticationMiddleware, update);

route.put("/comment/:id", authenticationMiddleware, comment);

route.put("/rating/:id", authenticationMiddleware, rating);

route.delete("/remove/:id", authenticationMiddleware, remove);

route.put(
  "/blog/:id",
  authenticationMiddleware,
  upload.single("background"),
  blog
);

route.post(
  "/create",
  authenticationMiddleware,
  upload.single("background"),
  create
);

module.exports = route;
