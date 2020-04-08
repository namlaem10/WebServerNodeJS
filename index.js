const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./API/routes/TaiKhoan.route");

const app = express();
const port = 3000;

// Connection MongoDB
mongoose.connect("mongodb://localhost/TravelSharing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connect success!!!");
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public")); // file static in public folder

app.use("/api/user", userRoute);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Start port " + port);
});
