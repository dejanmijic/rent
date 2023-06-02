const fs = require("fs");

module.exports.createUser = function (body) {
  try {
    fs.readFile(
      "data/Users.json",
      "utf8",
      function readFileCallback(err, data) {
        if (err) {
          throw err;
        }
        fileData = JSON.parse(data);
        fileData.users.push(body);
        stringifiedCollection = JSON.stringify(fileData);
        fs.writeFile(
          "data/Users.json",
          stringifiedCollection,
          "utf8",
          function writeFileCallback() {}
        );
      }
    );
  } catch (error) {
    throw error;
  }
};
