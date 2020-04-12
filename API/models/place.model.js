const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data.json");
const db = low(adapter);
db.defaults({ places: [] }).write();

module.exports = db;
