const express = require("express");
const multer = require("multer");

const controller = require("../controllers/Notification.controller"); // them controller
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const { send } = controller;

const route = express.Router();
// const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.post("/send/:id", authenticationMiddleware, send);

module.exports = route;
