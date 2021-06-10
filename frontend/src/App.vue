<template>
  <div v-if="email">
    <div class="nav">
      <router-link class="nav-link" to="/">Home</router-link> |
      <router-link class="nav-link" to="/recommendation"
        >recommendation</router-link
      >
      |
      <router-link class="nav-link" to="/logout">Logout</router-link>
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
  text-align: center;
  padding: 30px;
}

.nav-link {
  font-weight: bold;
  color: #aaaeb3;
}

.nav-link.router-link-exact-active {
  color: #789487;
}
</style>
