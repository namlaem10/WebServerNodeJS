const express = require("express");
const multer = require("multer");

const controller = require("../controllers/TaiKhoan.controller");
const auth = require("../middlewares/authMiddleware");
const cloudinary = require("../middlewares/cloudinaryMiddleware");

const { authenticationMiddleware } = auth;
const { uploadCloudinaryMiddleware } = cloudinary;
const {
  changepassword,
  updateinfo,
  login,
  register,
  fcm,
  find,
  addfriend,
  forgotpassword,
  getinfo,
} = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.post("/login", login);

route.post("/register", register);

route.put("/changepassword", authenticationMiddleware, changepassword);

route.put(
  "/updateinfo",
  authenticationMiddleware,
  upload.single("avatar"),
  uploadCloudinaryMiddleware,
  updateinfo
);

route.put("/fcm", authenticationMiddleware, fcm);
route.post("/forgotpassword", forgotpassword);

route.post("/find", authenticationMiddleware, find);

route.put("/addfriend", authenticationMiddleware, addfriend);

route.get("/getinfo", authenticationMiddleware, getinfo);

module.exports = route;
