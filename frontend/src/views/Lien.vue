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
          <div class="score">Score de Popularité</div>
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
export default {
  created: function () {
    console.log(this.$route.params.movieId);
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
.score {
}
</style>
