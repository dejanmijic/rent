<template>
  <div class="main">
    <div class="navbar">
      <div class="left-part">
        <label class="app-name">RentApp</label>
        <router-link to="/objects" class="link">Objects</router-link>
      </div>
      <div class="right-part">
        <router-link v-if="!isAuthenticated" to="/log-in" class="link"
          >Log in</router-link
        >
        <router-link
          v-if="isAuthenticated"
          class="link right-delimiter"
          to="/profile"
          >Profile</router-link
        >
        <label v-if="isAuthenticated" class="link" v-on:click="logOut"
          >Log out</label
        >
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-Page",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    this.isAuthenticated = !!localStorage.getItem("token");
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$router.push("/log-in");
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: rgb(217, 221, 221);
}
.app-name {
  font-size: 24px;
  font-weight: 700;
  color: rgb(227, 48, 8);
  border: 1px solid;
  padding: 6px;
  margin-right: 16px;
}
.right-part {
  display: flex;
}
.link {
  font-size: 22px;
  font-weight: 500;
  padding: 0 8px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.right-delimiter {
  border-right: 1px solid black;
}
.router-link-active {
  text-decoration: underline;
}
</style>
