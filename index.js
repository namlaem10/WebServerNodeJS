const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./API/routes/TaiKhoan.route");
const travelRoute = require("./API/routes/HanhTrinh.route");
const destinationRoute = require("./API/routes/DiaDiem.route");
const scheduleRoute = require("./API/routes/LichTrinh.route");
const touristDestinationRoute = require("./API/routes/DiemThamQuan.route");
const notificationRoute = require("./API/routes/Notification.route");

const webUserRoute = require("./routes/TaiKhoan.route");
const app = express();
const port = 3000;

// Connection MongoDB
mongoose.connect("mongodb://localhost/TravelSharing", {
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
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});
app.use("/user", webUserRoute);

app.listen(port, () => {
  console.log("Start port " + port);
});
