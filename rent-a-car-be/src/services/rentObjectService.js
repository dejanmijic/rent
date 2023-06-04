const fs = require("fs");

module.exports.getRentObjects = async function () {
  try {
    const data = await fs.promises.readFile("data/RentObjects.json", "utf8");
    return JSON.parse(data).rentObjects;
  } catch (error) {
    throw error;
  }
};
