const express = require("express");
const multer = require("multer");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
const controller = require("../controllers/TaiKhoan.controller");
const middlewares = require("../middlewares/middle.mid");
// const auth = require("../middlewares/authMiddleware");
// const { authenticationMiddleware } = auth;
const { index, search, createGetUser, createPostUser, userinfo } = controller;

const { checkCookie } = middlewares;
const route = express.Router();
const upload = multer({ dest: "public/uploads" });
// route.post("/login", login);
// route.post("/register", register);
// route.put("/changepassword", authenticationMiddleware, changepassword);
// route.put(
//   "/updateinfo",
//   authenticationMiddleware,
//   upload.single("avatar"),
//   updateinfo
// );

route.get("/", index);
route.get("/search", search);
route.get("/create", createGetUser);
route.post("/create", createPostUser);
route.get("/:id", userinfo);

module.exports = route;
