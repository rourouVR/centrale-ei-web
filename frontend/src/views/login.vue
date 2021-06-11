<template>
  <div id="submit">
    <form>
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>First Name</label>
        <input type="text" v-model="input.firstName" placeholder="firstName" />
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input type="text" v-model="input.lastName" placeholder="lastName" />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email1" v-model="input.email1" placeholder="Email" />
      </div>

      <button type="submit" @click="submit">SignUp</button>
    </form>
  </div>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="input.email" placeholder="Email" />
  </div>
  <div id="button"><button type="button" @click="login()">Login</button></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        email1: "",
        firstName: "",
        lastName: "",
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
              sessionStorage.setItem("email", this.input.email);
              console.log("welcome");
            } else {
              console.log("The email is incorrect");
            }
          });
      } else {
        console.log("An email must be present");
      }
    },
    submit(e) {
      e.preventDefault();
      if (
        this.input.email1 != "" &&
        this.input.firstName != "" &&
        this.input.lastName != ""
      ) {
        axios
          .get(
            `${process.env.VUE_APP_BACKEND_BASE_URL}/users/` + this.input.email1
          )
          .then((reponse) => {
            if (reponse.data.exists === "true") {
              console.log("Already Exists!!!");
            } else {
              axios
                .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/users/new`, {
                  email: this.input.email1,
                  firstName: this.input.firstName,
                  lastName: this.input.lastName,
                })
                .then((response) => {
                  if (response.status == 201) {
                    this.$root.email = this.input.email1;
                    sessionStorage.setItem("email", this.input.email);
                  } else {
                    console.log("please enter a valid email");
                  }
                });
            }
          });
      } else {
        console.log("please enter your credentials");
      }
    },
  },
};
</script>

<style scoped>
/*#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}*/

#login {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-left: 20%;
  text-align: center;
  border-radius: 0.5em;
  cursor: pointer;
}

.form-group {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-left: 20%;
  text-align: center;
  border-radius: 0.5em;
  cursor: pointer;
}

#submit {
  text-align: center;
}

#button {
  position: relative;
  width: 60%;
  padding-left: 20%;
  text-align: center;
  border-radius: 0.5em;
  cursor: pointer;
}
</style>
