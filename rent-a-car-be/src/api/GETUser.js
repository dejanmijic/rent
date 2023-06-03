const userService = require("./../services/UserService");

module.exports.handler = async function (req, res, next) {
  try {
    if (req.params.id !== req.token._id) {
      throw new Error("You can get only your own user data!");
    }
    const data = await userService.getUserById(req.params.id);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
