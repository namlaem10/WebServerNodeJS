const db = require("../models/place.model");
module.exports.getall = async function (req, res) {
  var places = await db.get("places").value();
  var placesAddress = [];
  await places.map(async (item) => {
    if (item.place_visit_address.includes("Đà Lạt")) {
      if (item.location) {
        placesAddress.push(item);
      }
    }
  });
  res.json(placesAddress);
};
