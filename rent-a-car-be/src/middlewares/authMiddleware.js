const jwt = require("jsonwebtoken");

module.exports.auth = function (req, res, next) {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.token = decoded;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate!");
  }
};
