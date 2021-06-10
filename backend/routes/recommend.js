const express = require("express");
const router = express.Router();
const movieModel = require("../models/movies");
const recommendModel = require("../models/recommend");

router.get("/:id", function (req, res) {
  recommendModel.find({ email: req.params.id }).then(function (recommendation) {
    movieModel
      .find({ imdbid: recommendation.movielist })
      .then(function (movies) {
        res.json({ movies: movies });
      });
  });
});

module.exports = router;
