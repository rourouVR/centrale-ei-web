const express = require("express");
const movieModel = require("../models/movies");
const router = express.Router();

router.get("/", function (req, res) {
  movieModel
    .find({})
    .limit(40)
    .then(function (movie) {
      res.json({ movie: movie });
    });
});
router.get("/:movieId", function (req, res) {
  movieModel.findById(req.params.movieId).then(function (movie) {
    res.json({ movie: movie });
  });
});

router.post("/new", function (req, res) {
  const newmovie = new movieModel({
    title: req.body.title,
    release_date: req.body.release_date,
    description: req.body.description,
    genre: req.body.genre,
    imageurl: req.body.imageurl,
  });

  newmovie
    .save()
    .then(function (newDocument) {
      res.status(201).json(newDocument);
    })
    .catch(function (error) {
      if (error.code === 11000) {
        res.status(400).json({
          message: `movie title "${newmovie.title}" already exists`,
        });
      } else {
        res.status(500).json({ message: "Error while adding the movie" });
      }
    });
});

router.delete("/:id", function (req, res) {
  movieModel.findByIdAndDelete({ _id: req.params.id }).then(function (movie) {
    res.send(movie);
  });
});

module.exports = router;
