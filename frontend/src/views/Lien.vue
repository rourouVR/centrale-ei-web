<template>
  <div class="tout">
    <div class="container">
      <div class="affiche">
        <img
          class="image"
          :title="film.title"
          :src="'https://image.tmdb.org/t/p/original' + film.imageurl"
          alt="Affiche du film"
        />
      </div>
      <div class="infos">
        <div class="titre">
          <h1>
            <font size="+6">{{ film.title }}</font>
          </h1>
        </div>
        <div class="description">
          <div class="resume">
            <p
              style="
                margin-left: 2.5em;
                padding: 0 7em 2em 0;
                border-width: 0px;
                border-color: black;
                border-style: solid;
                width: 60%;
              "
            >
              <font size="+1"> {{ film.description }}</font>
            </p>
          </div>
          <div class="aside">
            <div class="joli"></div>
            <div class="date de sortie">
              <p style="text-decoration: underline">release date:</p>
              <p>
                <font size="+2">{{ film.release_date }}</font>
              </p>
              <p style="text-decoration: underline">Genre:</p>
              <div v-for="data in genres" :key="data">
                <font size="+1">{{ data }}</font>
              </div>
              <p style="text-decoration: underline">langage:</p>
              <p>
                <span style="text-transform: uppercase">
                  <font size="+1">{{ film.language }}</font></span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="score">
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label @click="fiveStars" for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label @click="fourStars" for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label @click="threeStars" for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label @click="twoStars" for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label @click="oneStar" for="star1" title="text">1 star</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      name: "index.js",
      film: {},
      genres: [],
      item: "",
    };
  },
  methods: {
    fetchMovie: function () {
      return axios
        .get(
          `${process.env.VUE_APP_BACKEND_BASE_URL}/movies/movie/` +
            this.$route.params.movieId
        )
        .then((response) => {
          this.film = response.data.movie;
        })
        .catch(() => {
          console.log("ERROR");
        });
    },
    fetchgenres: function () {
      for (let i of this.film.genre) {
        axios
          .get(`${process.env.VUE_APP_BACKEND_BASE_URL}/genre/` + i)
          .then((response) => {
            this.genres.push(response.data);
            console.log(this.genres);
          })
          .catch(() => {
            console.log("ERROR");
          });
      }
    },
    fiveStars: function () {
      axios
        .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/ratings/rate`, {
          imdbid: this.film.imdbid,
          mail: this.$root.email,
          rating: 5,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    fourStars: function () {
      axios
        .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/ratings/rate`, {
          imdbid: this.film.imdbid,
          mail: this.$root.email,
          rating: 4,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    threeStars: function () {
      axios
        .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/ratings/rate`, {
          imdbid: this.film.imdbid,
          mail: this.$root.email,
          rating: 3,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    twoStars: function () {
      axios
        .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/ratings/rate`, {
          imdbid: this.film.imdbid,
          mail: this.$root.email,
          rating: 2,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    oneStar: function () {
      axios
        .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/ratings/rate`, {
          imdbid: this.film.imdbid,
          mail: this.$root.email,
          rating: 1,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
  },
  created: function () {
    this.fetchMovie().then(() => {
      this.fetchgenres();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
}

.affiche {
  overflow: hidden;
  flex-basis: 30%;
  display: flex;
  align-items: center;
}

.affiche img {
  width: 100%;
}

.infos {
  flex-basis: 70%;
  padding: 30px;
}

.description {
  display: flex;
  justify-content: space-between;
}

.resume {
  flex-basis: 70%;
}

.aside {
  flex-basis: 30%;
}

* {
  margin: 0;
  padding: 0;
}
.rate {
  float: left;
  height: 46px;
  padding: 20 10px;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.score {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
