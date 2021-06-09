const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  release_date: { type: String },
  description: { type: String },
  genre: { type: Array },
  imageurl: { type: String },
});

const movieModel = mongoose.model("movieModel", movieSchema, "movies");

module.exports = movieModel;
