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

router.beforeEach((to, from, next) => {
  const authenticatedUser = localStorage.getItem("token");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authenticatedUser) {
    next("/log-in");
  } else {
    next();
  }
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
