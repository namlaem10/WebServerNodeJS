require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./API/routes/TaiKhoan.route");
const travelRoute = require("./API/routes/HanhTrinh.route");
const destinationRoute = require("./API/routes/DiaDiem.route");
const scheduleRoute = require("./API/routes/LichTrinh.route");
const touristDestinationRoute = require("./API/routes/DiemThamQuan.route");
const notificationRoute = require("./API/routes/Notification.route");
const CookieParser = require("cookie-parser");
const AccountController = require("./controllers/TaiKhoan.controller");

const middlewares = require("./middlewares/middle.mid");

const webUserRoute = require("./routes/TaiKhoan.route");
const webHanhTrinhRoute = require("./routes/HanhTrinh.route");
const app = express();
const port = 3000;

// Connection MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connect success!!!");
});

app.locals.moment = require("moment");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public")); // file static in public folder
app.use(express.static("assets"));

app.use("/api/user", userRoute);
app.use("/api/travel", travelRoute);
app.use("/api/destination", destinationRoute);
app.use("/api/schedule", scheduleRoute);
app.use("/api/touristdestination", touristDestinationRoute);
app.use("/api/notification", notificationRoute);

//Web Master UI setting
app.use(CookieParser("vietnamvodich"));

app.set("view engine", "pug");
app.set("views", "./views");
const { postLogin, getLogin, logout } = AccountController;
const { auth } = middlewares;

app.get("/", function (req, res) {
  if (req.signedCookies.rememberMe) {
    res.redirect("/login");
  } else if (req.signedCookies.sessionId) {
    res.redirect("/user");
  } else {
    res.render("index");
  }
});
app.get("/login", getLogin);
app.post("/login", postLogin);
app.get("/logout", auth, logout);

app.use("/user", auth, webUserRoute);
app.use("/tour", auth, webHanhTrinhRoute);
app.listen(process.env.PORT || port, () => {
  console.log("Server is running..." + process.env.PORT + "or" + port);
});
