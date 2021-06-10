const express = require("express");
const router = express.Router();
const genreModel = require("../models/genre");

router.get("/:id", function (req, res) {
  genreModel.findOne({ genreid: req.params.id }).then(function (genre) {
    res.json(genre.name);
  });
});

module.exports = router;
