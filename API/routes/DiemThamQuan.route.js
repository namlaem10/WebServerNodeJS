const express = require("express");
const multer = require("multer");

const controller = require("../controllers/DiemThamQuan.controller");
const auth = require("../middlewares/authMiddleware");
const cloudinary = require("../middlewares/cloudinaryMiddleware");

const { authenticationMiddleware } = auth;
const { uploadCloudinaryMiddleware } = cloudinary;
const { destination, rating, uploadimage } = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.get("/:destination", authenticationMiddleware, destination);

route.put("/rating/:id", authenticationMiddleware, rating);

route.put(
  "/uploadimage/:id",
  authenticationMiddleware,
  upload.single("image"),
  uploadCloudinaryMiddleware,
  uploadimage
);

module.exports = route;
