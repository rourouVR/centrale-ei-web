<template>
  <div class="home">
    <h1>Welcome</h1>
    <!-- <input v-model="message" placeholder="movie" /> -->
    <div class="container">
      <movie
        :movie="movie"
        class="movie"
        v-for="movie in movies"
        :key="movie.id"
      />
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
      i: 20,
    };
  },
  methods: {
    fetchmovielist: function () {
      axios
        .get(`${process.env.VUE_APP_BACKEND_BASE_URL}/movies/40`)
        .then((response) => {
          this.movies = response.data.movie;
          console.log(this.movies);
        })
        .catch(() => {
          console.log("ERROR");
        });
    },
    getNextlist() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.i += 20;
          console.log(this.i);
          axios
            .get(`${process.env.VUE_APP_BACKEND_BASE_URL}/movies/` + this.i)
            .then((response) => {
              this.movies = response.data.movie;
            });
        }
      };
    },
  },
  beforeMount: function () {
    this.fetchmovielist();
  },
  mounted() {
    this.getNextlist();
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
