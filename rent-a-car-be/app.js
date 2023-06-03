const express = require("express");
const bodyParser = require("body-parser");
const { configureRoutes } = require("./src/routing/configureRoutes");

const app = express();
const port = 3005;

app.use(bodyParser.json({ type: "application/json" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
  next();
});

configureRoutes(app);

app.listen(port, () => console.log(`Express app running on port ${port}!`));
