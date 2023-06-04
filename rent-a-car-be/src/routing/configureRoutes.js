const POSTUser = require("./../api/POSTUser");
const POSTLogin = require("./../api/POSTLogin");
const GETUser = require("../api/GETUser");
const PUTUser = require("../api/PUTUser");
const GETRentObjects = require("../api/GETRentObjects");
const authMiddleware = require("../middlewares/authMiddleware");

module.exports.configureRoutes = function (app) {
  const auth = authMiddleware.auth;
  // users
  app.post("/users", POSTUser.handler);
  app.get("/users/:id", auth, GETUser.handler);
  app.put("/users/:id", auth, PUTUser.handler);
  // auth
  app.post("/auth/log-in", POSTLogin.handler);
  // rent objects
  app.get("/objects", GETRentObjects.handler);
};
