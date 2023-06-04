const rentObjectService = require("./../services/rentObjectService");

module.exports.handler = async function (req, res, next) {
  try {
    const data = await rentObjectService.getRentObjects();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
