<template>
  <div class="register-form">
    <h1>Registration</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div class="form-item">
        <label>Username:</label>
        <input type="text" v-model="username" />
      </div>
      <div class="form-item">
        <label>Password:</label>
        <input type="password" v-model="password" />
        <label
          class="form-item-error"
          v-if="password && repeatedPassword && password !== repeatedPassword"
          >Passwords do not match!</label
        >
      </div>
      <div class="form-item">
        <label>Repeat password:</label>
        <input type="password" v-model="repeatedPassword" />
      </div>
      <div class="form-item">
        <label>First name:</label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="form-item">
        <label>Last name:</label>
        <input type="text" v-model="lastName" />
      </div>
      <div class="form-item">
        <label>Gender:</label>
        <div class="gender">
          <div>
            <input type="radio" name="gender" value="male" v-model="gender" />
            <label>Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" v-model="gender" />
            <label>Female</label>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label>Date of birth:</label>
        <input type="date" v-model="dateOfBirth" />
      </div>
      <div>
        <button class="submit" :disabled="disabled()" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register-Page",

  data() {
    return {
      username: "",
      password: "",
      repeatedPassword: "",
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
    };
  },

  methods: {
    handleSubmit() {
      const data = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
      };
      const self = this;
      axios
        .post("http://localhost:3005/users", data)
        .then(function () {
          self.$router.push("/log-in");
        })
        .catch(function (error) {
          alert(error);
        });
    },
    disabled() {
      return (
        !this.username ||
        !this.password ||
        !this.repeatedPassword ||
        !this.firstName ||
        !this.lastName ||
        !this.gender ||
        !this.dateOfBirth ||
        this.password !== this.repeatedPassword
      );
    },
  },
};
</script>

<style scoped>
.register-form {
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

.form-item-error {
  color: red;
}

.gender {
  display: flex;
  justify-content: space-around;
  align-items: center;
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
