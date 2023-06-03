import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Routes from "./routes";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

console.log(router);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
