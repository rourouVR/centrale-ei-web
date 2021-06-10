<template>
  <h1>Are you sure you want to leave?</h1>
  <a @click="logout">
    <img
      class="image"
      title="Logout"
      src="https://www.nicepng.com/png/detail/88-888831_logout-exit-door-comments-exit-door-icon-white.png"
    />
    <p>Logout</p>
  </a>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$root.email = null;
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.image {
  cursor: pointer;
  font-size: 68px;
  width: 120px;
  height: 120px;
  line-height: 114px;
  display: block;
  margin: 50px auto 60px;
  border: 1px solid #ffffff;
  background-color: #d5d5d5;
  text-align: center;
  color: #ffffff;
}
.h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 200px;
  margin-block-end: 0.67em;
  margin-inline-start: 200px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.text-center {
  text-align: center;
}
</style>
