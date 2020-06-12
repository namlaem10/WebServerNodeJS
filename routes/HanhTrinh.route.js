const express = require("express");
const multer = require("multer");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
const controller = require("../controllers/HanhTrinh.controller");
const middlewares = require("../middlewares/middle.mid");
// const auth = require("../middlewares/authMiddleware");
// const { authenticationMiddleware } = auth;
const { index } = controller;
const route = express.Router();
const upload = multer({ dest: "public/uploads" });

route.get("/", index);

module.exports = route;
