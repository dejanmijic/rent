const POSTUser = require("./../api/POSTUser");
const POSTLogin = require("./../api/POSTLogin");

module.exports.configureRoutes = function (app) {
  // users
  app.post("/users", POSTUser.handler);
  // auth
  app.post("/auth/log-in", POSTLogin.handler);
};
