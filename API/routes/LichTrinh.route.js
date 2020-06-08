const express = require("express");
const multer = require("multer");

const controller = require("../controllers/LichTrinh.controller");
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const { suggest } = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.get("/suggest", authenticationMiddleware, suggest);

module.exports = route;
