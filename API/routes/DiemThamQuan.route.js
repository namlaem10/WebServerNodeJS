const express = require("express");
const multer = require("multer");

const controller = require("../controllers/DiemThamQuan.controller");
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const { destination, rating } = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.get("/:destination", authenticationMiddleware, destination);

route.put("/rating/:id", authenticationMiddleware, rating);

module.exports = route;
