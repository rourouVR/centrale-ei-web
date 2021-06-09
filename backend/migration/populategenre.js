const mongoose = require("mongoose");
const genreModel = require("../models/genre");
const axios = require("axios");
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
axios
  .get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=522d421671cf75c2cba341597d86403a&language=en-US "
  )
  .then((response) => {
    console.log(response);
    for (const genre of response.data.genres) {
      console.log(genre);
      const newgenre = new genreModel({
        genreid: genre.id,
        name: genre.name,
      });

      newgenre.save();
    }
  });
