const express = require("express");
const bodyParser = require("body-parser");
const { configureRoutes } = require("./src/routing/configureRoutes");

const app = express();
const port = 3005;

app.use(bodyParser.json({ type: "application/json" }));

configureRoutes(app);

app.listen(port, () => console.log(`Express app running on port ${port}!`));
