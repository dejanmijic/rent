const authService = require("./../services/authService");

module.exports.handler = async function (req, res, next) {
  try {
    const body = req.body;
    const data = await authService.signInUser(body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
