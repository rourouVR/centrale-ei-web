<template>
  <div v-if="email">
    <div class="nav">
      <router-link class="nav-link" to="/">Home</router-link> |
      <router-link class="nav-link" to="/counter">Counter</router-link> |
      <router-link class="nav-link" to="/users">Users</router-link> |
      <router-link class="nav-link" to="/about">About</router-link> |
      <router-link class="nav-link" to="/lien">About</router-link>
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
  color: #2c3e50;
}

.nav-link.router-link-exact-active {
  color: #42b983;
}
</style>
