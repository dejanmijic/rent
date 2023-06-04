<template>
  <div class="objects">
    <h1>Objects</h1>
  </div>
</template>

<script>
import axios from "./../services/httpService";

export default {
  name: "Objects-Page",
  data() {
    return {
      objects: [],
    };
  },
  mounted() {
    const self = this;
    axios
      .get("/objects")
      .then(function (resposne) {
        self.objects = resposne.data;
      })
      .catch(function (error) {
        alert(error);
      });
  },
};
</script>

<style scoped>
.objects {
  width: 60%;
  margin: auto;
  text-align: center;
}
</style>
