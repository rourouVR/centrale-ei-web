<template>
  <div class="tout">
    <div class="container">
      <div class="affiche">
        <img
          class="image"
          src="https://img.filmsactu.net/datas/films/c/r/creed-2/n/creed-2-5f4e2942a8cc3.jpg"
          alt="Affiche du film"
        />
      </div>
      <div class="infos">
        <div class="titre">
          <h1>Titre du film</h1>
          <div class="score">
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label @click="fiveStars" for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label @click="fourStars" for="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label @click="threeStars" for="star3" title="text"
                >3 stars</label
              >
              <input type="radio" id="star2" name="rate" value="2" />
              <label @click="twoStars" for="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label @click="oneStar" for="star1" title="text">1 star</label>
            </div>
          </div>
        </div>
        <div class="description">
          <div class="resume">
            <h2>Résumé</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              animi et id fugiat sint aliquid minus amet rem fugit inventore aut
              corrupti similique est cum dolore, ab quidem sed architecto.
            </p>
          </div>
          <div class="aside">
            <div class="joli"></div>
            <div class="date de sortie">
              <p>Date de Sortie</p>
              <p>Acteur</p>

              <p>Genre</p>
              <p>Langage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function () {
    console.log(this.$route.params.movieId);
  },
  data: function () {
    return {
      name: "index.js",
    };
  },
  methods: {
    fiveStars: function () {
      axios
        .post("basededonnées", {
          rating: 5,
          movieId: this.$route.params.movieId,
          email: this.$root.email,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    fourStars: function () {
      axios
        .post("basededonnées", {
          rating: 4,
          movieId: this.$route.params.movieId,
          email: this.$root.email,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    threeStars: function () {
      axios
        .post("basededonnées", {
          rating: 3,
          movieId: this.$route.params.movieId,
          email: this.$root.email,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    twoStars: function () {
      axios
        .post("basededonnées", {
          rating: 2,
          movieId: this.$route.params.movieId,
          email: this.$root.email,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
    oneStar: function () {
      axios
        .post("basededonnées", {
          rating: 1,
          movieId: this.$route.params.movieId,
          email: this.$root.email,
        })
        .then(() => {})
        .catch(() => {
          alert("une erreur est survenue");
        });
    },
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
  padding: 0 10px;
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
}
</style>
