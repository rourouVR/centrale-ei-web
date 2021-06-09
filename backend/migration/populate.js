const mongoose = require("mongoose");
const movieModel = require("../models/movies");
const axios = require("axios");
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
for (let pas = 1; pas < 80; pas++) {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=522d421671cf75c2cba341597d86403a&language=en-US&page=" +
        pas
    )
    .then((response) => {
      for (const movie of response.data.results) {
        console.log(movie);
        const newmovie = new movieModel({
          imdbid: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          description: movie.overview,
          genre: movie.genre_ids,
          note: movie.vote_average,
          imageurl: movie.poster_path,
          language: movie.original_language,
        });

        newmovie.save();
      }
    });
}
