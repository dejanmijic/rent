<template>
  <div class="object">
    <div class="logo-section"><img :src="logoSrc" /></div>
    <div class="data-section">
      <div class="data-section-left">
        <div class="name-section">
          <label class="name">{{ name }}</label>
        </div>

        <label class="street">{{ location.address.street }}</label>
        <label
          >{{ location.address.city }} {{ location.address.postalCode }}</label
        >
        <label class="coordinates"
          >{{ location.latitude }} {{ location.longitude }}</label
        >
        <label v-if="opened" class="opened">OPENED</label>
        <label v-if="!opened" class="closed">CLOSED</label>
      </div>
      <div class="data-section-right">
        <label>Rating:</label>
        <div class="rating">
          <label>{{ averageRating }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "object-component",
  props: ["id", "name", "opened", "logoSrc", "averageRating", "location"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.object {
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
  border: 1px solid gray;
  margin: 24px 0;
}
.logo-section {
  margin-left: 24px;
}
.data-section {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.data-section-left {
  display: flex;
  flex-direction: column;
}
.name-section {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.data-section-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.rating {
  background: rgb(227, 48, 8);
  padding: 12px;
  color: white;
  border-radius: 4px;
  font-weight: 700;
  margin-top: 4px;
}
label {
  text-align: left;
}
img {
  width: 120px;
  height: 120px;
}
.name {
  font-size: 24px;
  font-weight: 700;
}
.street {
  font-weight: 500;
  font-size: 18px;
}
.coordinates {
  color: gray;
  font-size: 14px;
}
.opened {
  margin-top: 12px;
  font-weight: 700;
  color: green;
  border: 1px solid;
  text-align: center;
  width: fit-content;
  padding: 2px 6px;
}
.closed {
  margin-top: 12px;
  font-weight: 700;
  color: red;
  border: 1px solid;
  text-align: center;
  width: fit-content;
  padding: 2px 6px;
}
</style>
