const POSTUser = require("./../api/POSTUser");

module.exports.configureRoutes = function (app) {
  // users
  app.post("/users", POSTUser.handler);
};
