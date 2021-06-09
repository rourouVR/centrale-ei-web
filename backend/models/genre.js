const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  genreid: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
});

const genreModel = mongoose.model("genreModel", genreSchema, "genre");

module.exports = genreModel;
