const express = require("express");
const router = express.Router();
const movieModel = require("../models/movies");
const recommendModel = require("../models/recommend");

router.get("/:id", function (req, res) {
  console.log({ email: req.params.id });
  recommendModel
    .findOne({ email: req.params.id })
    .then(function (recommendation) {
      console.log({ hola: recommendation });
      movieModel
        .find({ imdbid: { $in: recommendation.movieList } })
        .limit(40)
        .then(function (movies) {
          res.json({ movies: movies });
        });
    });
});

module.exports = router;
