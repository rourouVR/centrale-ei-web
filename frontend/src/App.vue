<template>
  <div v-if="email">
    <div class="nav">
      <div class="link-container">
        <router-link class="nav-link" to="/">Home</router-link>
      </div>
      <div class="link-container">
        <router-link class="nav-link" to="/recommendation"
          >Recommendation</router-link
        >
      </div>
      <div class="link-container">
        <router-link class="nav-link" to="/logout">Logout</router-link>
      </div>
    </div>
    <router-view />
  </div>
  <Login v-else />
</template>
<script>
import Login from "./views/login.vue";
export default {
  data: function () {
    return {
      email: null,
    };
  },
  components: {
    Login,
  },
  created: function () {
    this.email = sessionStorage.getItem("email");
  },
};
</script>
<style scoped>
.nav {
  color: white;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.link-container {
  float: left;
}

.nav-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #111;
}

.nav-link.router-link-exact-active {
  color: #789487;
}
</style>
