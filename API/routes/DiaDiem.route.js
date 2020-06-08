const express = require("express");
const multer = require("multer");

const controller = require("../controllers/DiaDiem.controller");
const auth = require("../middlewares/authMiddleware");
const cloudinary = require("../middlewares/cloudinaryMiddleware");

const { uploadCloudinaryMiddleware } = cloudinary;
const { authenticationMiddleware } = auth;
const { all, update } = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.get("/all", authenticationMiddleware, all);

route.put(
  "/update/:id",
  authenticationMiddleware,
  upload.single("destination_image"),
  uploadCloudinaryMiddleware,
  update
);

module.exports = route;
