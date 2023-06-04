<template>
  <div class="profile-form">
    <h1>Profile</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div class="form-item">
        <label>Username:</label>
        <input :disabled="!editMode" type="text" v-model="username" />
      </div>
      <div v-if="editMode">
        <label
          v-on:click="switchChangePasswordMode(true)"
          class="change-password-label"
          v-if="!changePassword"
          >Change pasword?</label
        >
        <label
          v-on:click="switchChangePasswordMode(false)"
          class="change-password-label"
          v-if="changePassword"
          >Don't change password</label
        >
      </div>
      <div v-if="editMode && changePassword">
        <div class="form-item">
          <label>New password:</label>
          <input type="password" v-model="newPassword" />
          <label
            class="form-item-error"
            v-if="
              newPassword &&
              repeatedNewPassword &&
              newPassword !== repeatedNewPassword
            "
            >Passwords do not match!</label
          >
        </div>
        <div class="form-item">
          <label>Repeat new password:</label>
          <input type="password" v-model="repeatedNewPassword" />
        </div>
        <div class="form-item">
          <label>Old password:</label>
          <input type="password" v-model="oldPassword" />
        </div>
      </div>

      <div class="form-item">
        <label>First name:</label>
        <input :disabled="!editMode" type="text" v-model="firstName" />
      </div>
      <div class="form-item">
        <label>Last name:</label>
        <input :disabled="!editMode" type="text" v-model="lastName" />
      </div>
      <div class="form-item">
        <label>Gender:</label>
        <div class="gender">
          <div>
            <input
              :disabled="!editMode"
              type="radio"
              name="gender"
              value="male"
              v-model="gender"
            />
            <label>Male</label>
          </div>
          <div>
            <input
              :disabled="!editMode"
              type="radio"
              name="gender"
              value="female"
              v-model="gender"
            />
            <label>Female</label>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label>Date of birth:</label>
        <input :disabled="!editMode" type="date" v-model="dateOfBirth" />
      </div>
      <div class="label-item">
        <label class="undo" v-if="editMode" v-on:click="switchMode(false)"
          >Undo</label
        >
      </div>

      <div v-if="editMode">
        <button class="button submit" type="submit" :disabled="disabled()">
          Save
        </button>
      </div>
    </form>
    <div v-if="!editMode">
      <button class="button edit" v-on:click="switchMode(true)">
        Edit profile
      </button>
    </div>
  </div>
</template>

<script>
import axios from "./../services/httpService";

export default {
  name: "Profile-Page",
  data() {
    return {
      id: "",
      editMode: false,
      changePassword: false,
      username: "",
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      oldPassword: "",
      repeatedNewPassword: "",
      newPassword: "",
    };
  },
  mounted() {
    this.id = JSON.parse(localStorage.getItem("user")).id;
    const self = this;
    axios
      .get(`/users/${this.id}`)
      .then(function (response) {
        const user = response.data;
        self.username = user.username;
        self.firstName = user.firstName;
        self.lastName = user.lastName;
        self.gender = user.gender;
        self.dateOfBirth = user.dateOfBirth;
      })
      .catch(function (error) {
        if (error) {
          alert(error);
        }
      });
  },
  methods: {
    switchMode(value) {
      this.editMode = value;
    },
    switchChangePasswordMode(value) {
      this.changePassword = value;
    },
    handleSubmit() {
      const self = this;
      const data = {
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
      };
      if (this.changePassword && this.newPassword && this.oldPassword) {
        (data.newPassword = this.newPassword),
          (data.oldPassword = this.oldPassword);
      }
      axios
        .put(`/users/${this.id}`, data)
        .then(function (response) {
          self.editMode = false;
          const user = response.data;
          self.username = user.username;
          self.firstName = user.firstName;
          self.lastName = user.lastName;
          self.gender = user.gender;
          self.dateOfBirth = user.dateOfBirth;
        })
        .catch(function (error) {
          if (error) {
            alert(error.response.data.error);
          }
        });
    },
    disabled() {
      return (
        !this.username ||
        !this.firstName ||
        !this.lastName ||
        !this.gender ||
        !this.dateOfBirth ||
        (this.changePassword &&
          (!this.newPassword || !this.oldPassword || !this.repeatedNewPassword))
      );
    },
  },
};
</script>

<style scoped>
.profile-form {
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

.label-item {
  padding: 12px;
}

.gender {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.button {
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
}
.submit {
  background-color: rgb(160, 226, 160);
}
.edit {
  background-color: rgb(192, 193, 192);
}
.undo {
  margin-top: 22px;
  font-weight: 700;
  cursor: pointer;
  padding: 12px;
}
.change-password-label {
  cursor: pointer;
}
</style>
