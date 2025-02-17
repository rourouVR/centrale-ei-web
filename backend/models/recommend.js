const mongoose = require("mongoose");

const recommendSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  movieList: { type: [String] },
});

const recommendModel = mongoose.model(
  "recommendModel",
  recommendSchema,
  "recommendation"
);

module.exports = recommendModel;
