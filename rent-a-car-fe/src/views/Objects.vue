<template>
  <div class="objects">
    <div>
      <object-component
        v-for="object in objects"
        :key="object.id"
        :id="object.id"
        :name="object.name"
        :opened="object.opened"
        :logoSrc="object.logoSrc"
        :averageRating="object.averageRating"
        :location="object.location"
      ></object-component>
    </div>
  </div>
</template>

<script>
import axios from "./../services/httpService";
import ObjectComponent from "./../components/ObjectComponent.vue";

export default {
  name: "Objects-Page",
  components: {
    "object-component": ObjectComponent,
  },
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
        self.objects = resposne.data.sort((a, b) => b.opened - a.opened);
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
