const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  imdbid: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  release_date: { type: String },
  description: { type: String },
  genre: { type: Array },
  note: { type: String },
  imageurl: { type: String },
  language: { type: String },
});

const movieModel = mongoose.model("movieModel", movieSchema, "movies");

module.exports = movieModel;
