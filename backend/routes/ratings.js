const ratingModel = require("../models/rating");
const express = require("express");
const router = express.Router();

router.post("/rate", function (req, res) {
  ratingModel
    .findOne({
      imdbid: req.body.movie_id,
      mail: req.body.email,
    })
    .then(function (rating) {
      let ratingToAddOrUpdate;
      if (rating) {
        ratingToAddOrUpdate = rating;
      } else {
        ratingToAddOrUpdate = new ratingModel({
          email: req.body.email,
          movie_id: req.body.movie_id,
          rating: req.body.rating,
        });
      }
      ratingToAddOrUpdate
        .save()
        .then(function (newOrUpdatedDocument) {
          res.status(200).json(newOrUpdatedDocument);
        })
        .catch(function (error) {
          console.error(error);
          res
            .status(500)
            .json({ message: "Error while adding or updating the rating" });
        });
    });
});

module.exports = router;
