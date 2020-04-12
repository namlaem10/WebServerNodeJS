const express = require("express");
const multer = require("multer");

const controller = require("../controllers/HanhTrinh.controller");
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const { all, own, create } = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.get("/all", authenticationMiddleware, all);

route.get("/own", authenticationMiddleware, own);

route.post(
  "/create",
  authenticationMiddleware,
  upload.single("background"),
  create
);

// route.post("/register", register);

// route.put("/changepassword", authenticationMiddleware, changepassword);

// route.put(
//   "/updateinfo",
//   authenticationMiddleware,
//   upload.single("avatar"),
//   updateinfo
// );

module.exports = route;
