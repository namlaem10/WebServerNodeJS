const express = require("express");
const multer = require("multer");

const controller = require("../controllers/HanhTrinh.controller");
const auth = require("../middlewares/authMiddleware");
const cloudinary = require("../middlewares/cloudinaryMiddleware");

const { uploadCloudinaryMiddleware } = cloudinary;

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
  saleman,
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
  uploadCloudinaryMiddleware,
  blog
);

route.post("/create", authenticationMiddleware, create);

route.get("/saleman", authenticationMiddleware, saleman);

module.exports = route;
