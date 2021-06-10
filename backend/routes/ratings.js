const ratingModel = require("../models/rating");
const express = require("express");
const router = express.Router();

router.post("/rate", function (req, res) {
  ratingModel
    .findOne({
      imdbid: req.body.imdbid,
      mail: req.body.mail,
    })
    .then(function (rating) {
      console.log({ rating });
      if (rating) {
        rating.update({ rating: req.body.rating }).then(() => {
          res.status(200).json({ status: "ok" });
        });
      } else {
        const newRating = new ratingModel({
          mail: req.body.mail,
          imdbid: req.body.imdbid,
          rating: req.body.rating,
        });

        newRating
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
      }
    });
});

module.exports = router;
