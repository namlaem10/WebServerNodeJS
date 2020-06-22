const express = require("express");
const multer = require("multer");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
const controller = require("../controllers/HanhTrinh.controller");
const middlewares = require("../middlewares/middle.mid");
// const auth = require("../middlewares/authMiddleware");
// const { authenticationMiddleware } = auth;
const { index, block, unBlock, travelDetail } = controller;
const route = express.Router();
const upload = multer({ dest: "public/uploads" });

route.get("/", index);
// route.get("/search", search);
// route.get("/create", createGetUser);
// route.post("/create", createPostUser);
route.get("/:id/:day", travelDetail);
route.get("/block/:id", block);
route.get("/unblock/:id", unBlock);
// route.post("/edit/:id", edit);
module.exports = route;
