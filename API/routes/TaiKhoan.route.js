const express = require("express");
const multer = require("multer");

const controller = require("../controllers/TaiKhoan.controller");
const auth = require("../middlewares/authMiddleware");

const { authenticationMiddleware } = auth;
const { changepassword, updateinfo, login, register } = controller;

const route = express.Router();
const upload = multer({ dest: "public/uploads" });

//API for mobile app

route.post("/login", login);

route.post("/register", register);

route.put("/changepassword", authenticationMiddleware, changepassword);

route.put(
  "/updateinfo",
  authenticationMiddleware,
  upload.single("avatar"),
  updateinfo
);

// route.post("/test", authenticationMiddleware, controller.posttest);
// route.get("/test", authenticationMiddleware, controller.gettest);

// route.get("/api/user", (req, res) => {
//   User.find((err, users) => {
//     if (err) res.send(err);
//     res.json(users);
//   });
// });

// route.get("/api/user/:idUser", (req, res) => {
//   let id = req.params.idUser;
//   User.findById(id, (err, user) => {
//     if (err) res.send(err);
//     res.json(user);
//   });
// });

// route.post("/api/user/new", upload.single("image"), (req, res) => {
//   if (req.body) {
//     let newUser = {
//       Email: req.body.email,
//       TenHienThi: req.body.displayName,
//       MatKhau: req.body.password,
//       Avatar: req.file.destination + "/" + req.file.filename,
//     };
//     User.create(newUser, (err, user) => {
//       if (err) res.send(err);
//       User.find((err, users) => {
//         if (err) res.send(err);
//         const userFind = users.find((u) => {
//           return u.Email === req.body.email;
//         });
//         if (userFind) res.json(userFind);
//       });
//     });
//   }
// });

// route.put("/api/user/:id", (req, res) => {
//   let id = req.params.id;
//   let updateUser = {
//     TenHienThi: req.body.displayName,
//     MatKhau: req.body.password,
//   };
//   User.findByIdAndUpdate(id, updateUser, (err, user) => {
//     if (err) res.send(err);
//     res.send("Successfully! User updated");
//   });
// });

// route.delete("/api/user/:id", (req, res) => {
//   let id = req.params.id;
//   User.remove({ _id: id }, (err) => {
//     if (err) res.send(err);
//     res.send("Successfully! User deleted");
//   });
// });

module.exports = route;
