const userService = require("./../services/UserService");

module.exports.handler = function (req, res, next) {
  try {
    const body = req.body;
    const data = userService.createUser(body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
