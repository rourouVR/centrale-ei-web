const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  imdbid: { type: String, required: true, unique: true },
  mail: { type: String, required: true, unique: true },
  rating: { type: Number },
});

const ratingModel = mongoose.model("ratingModel", ratingSchema, "ratings");

module.exports = ratingModel;
