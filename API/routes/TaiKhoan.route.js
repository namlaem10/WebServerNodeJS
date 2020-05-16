const express = require("express");
const multer = require("multer");

const controller = require("../controllers/TaiKhoan.controller");
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const { changepassword, updateinfo, login, register, fcm } = controller;

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
  updateinfo
);

route.put("/fcm", authenticationMiddleware, fcm);

module.exports = route;
