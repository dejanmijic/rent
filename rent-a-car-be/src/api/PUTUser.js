const authService = require("./../services/userService");

module.exports.handler = async function (req, res, next) {
  try {
    const body = req.body;
    const data = await authService.editUser(body, req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
