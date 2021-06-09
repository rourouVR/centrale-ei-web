const mongoose = require("mongoose");
const movieModel = require("../models/movies");
const axios = require("axios");
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

axios
  .get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=522d421671cf75c2cba341597d86403a&language=en-US&page=2"
  )
  .then((response) => {
    for (const movie of response.data.results) {
      console.log(movie);
      const newmovie = new movieModel({
        title: movie.title,
        release_date: movie.release_date,
        description: movie.overview,
        genre: movie.genre_ids,
        imageurl: movie.poster_path,
      });

      newmovie.save();
    }
  });
