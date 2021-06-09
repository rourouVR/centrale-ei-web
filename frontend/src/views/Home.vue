<template>
  <div class="home">
    <h1>Welcome!!</h1>
    <div class="container">
      <movie
        :movie="movie"
        class="movie"
        v-for="movie in movies"
        :key="movie.id"
      />
    </div>

    <div id="v-model-basic" class="home">
      <form>
        <input v-model="movieName" placeholder="Add a movie" />
        <p>{{ movieName }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import movie from "@/components/movie.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    movie,
  },
  data: function () {
    return {
      movieName: " ",
      movies: [],
    };
  },
  methods: {
    fetchmovielist: function () {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=522d421671cf75c2cba341597d86403a&language=en-US&page=1"
        )
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies);
        })
        .catch(() => {
          console.log("ERROR");
        });
    },
  },
  created: function () {
    this.fetchmovielist();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
