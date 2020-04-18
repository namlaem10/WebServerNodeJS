const express = require("express");
const multer = require("multer");

const controller = require("../controllers/HanhTrinh.controller");
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const { all, own, create, update, remove } = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.get("/all", authenticationMiddleware, all);

route.get("/own", authenticationMiddleware, own);

route.put("/update/:id", authenticationMiddleware, update);

route.delete("/remove/:id", authenticationMiddleware, remove);

route.post(
  "/create",
  authenticationMiddleware,
  upload.single("background"),
  create
);

module.exports = route;
