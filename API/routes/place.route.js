const express = require("express");
const multer = require("multer");

const controller = require("../controllers/places.controller");
const route = express.Router();

route.get("/getall", controller.getall);

module.exports = route;
