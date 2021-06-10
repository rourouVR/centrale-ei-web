<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="input.email" placeholder="Email" />
    <button type="button" @click="login()">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.email != "") {
        axios
          .get(
            `${process.env.VUE_APP_BACKEND_BASE_URL}/users/` + this.input.email
          )
          .then((response) => {
            console.log(response);
            if (response.data.exists === "true") {
              this.$root.email = this.input.email;
              console.log("welcome");
            } else {
              console.log("The email is incorrect");
            }
          });
      } else {
        console.log("An email must be present");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
