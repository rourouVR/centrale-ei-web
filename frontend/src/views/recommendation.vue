<template>
  <div class="home">
    <h1>Recommended</h1>
    <!-- <input v-model="message" placeholder="movie" /> -->
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
          `${process.env.VUE_APP_BACKEND_BASE_URL}/recommend/` +
            this.$root.email
        )
        .then((response) => {
          this.movies = response.data.movies;
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
  color: #59a384;
}
</style>
