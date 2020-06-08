const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports.uploadCloudinaryMiddleware = (req, res, next) => {
  if (req.file.path) {
    cloudinary.uploader.upload(
      req.file.path,
      { folder: "Travel Sharing" },
      (err, result) => {
        if (err) res.status(400).send(err);
        else if (result) {
          fs.unlinkSync(req.file.path);
          console.log("result", result);
          req.url = result.secure_url;
          next();
        }
      }
    );
  } else next();
};
