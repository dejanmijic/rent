<template>
  <div class="login-form">
    <h1>Log In</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div class="form-item">
        <label>Username:</label>
        <input type="text" v-model="username" />
      </div>
      <div class="form-item">
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <div>
        <button class="submit" :disabled="disabled()" type="submit">
          Log in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "./../services/httpService";

export default {
  name: "Login-Page",

  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        username: this.username,
        password: this.password,
      };
      const self = this;
      axios
        .post("/auth/log-in", data)
        .then(function (response) {
          localStorage.setItem("token", response.data.token);
          self.$router.push("/");
        })
        .catch(function (error) {
          alert(error.response.data.error);
        });
    },
    disabled() {
      return !this.username || !this.password;
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 40%;
  margin: auto;
  text-align: center;
}

.form-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  margin: auto;
  padding: 12px;
}

.form-item label {
  text-align: left;
  font-weight: 600;
  margin-bottom: 6px;
}

.submit {
  margin: 24px;
  padding: 16px;
  border-radius: 6px;
  width: 50%;
  outline: none;
  cursor: pointer;
  border: none;
  font-family: Avenir;
  font-size: 24px;
  font-weight: 600;
  background-color: rgb(160, 226, 160);
}
</style>
