<template>
  <div class="movie-container">
    <div class="container">

      <router-link :to="'/movie/' + movie.id">
        <img
          class="image"
          title="movie.title"
          :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
        />
        <div class="middle">
          <div class="text">{{ movie.overview }}</div>
        </div>
      </router-link>

    </div>
    <p>{{ movie.title }}</p>
    <p>{{ movie.release_date }}</p>
  </div>
</template>

<script>
export default {
  name: "movie",
  props: {
    movie: Object,
  },
};
</script>

<style scoped>
.movie-container {
  width: 300px;
  margin: 20px;
  cursor: pointer;
}
.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.middle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #141616;
}

.movie-container:hover .middle {
  opacity: 0.67;
  cursor: pointer;
}
.text {
  color: rgb(255, 250, 250);
  font-size: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
