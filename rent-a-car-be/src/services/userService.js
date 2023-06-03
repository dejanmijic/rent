const fs = require("fs");
const bcrypt = require("bcrypt");

async function hashPassword(plainPassword) {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
}

module.exports.createUser = function (body) {
  try {
    fs.readFile(
      "data/Users.json",
      "utf8",
      async function readFileCallback(err, data) {
        if (err) {
          throw err;
        }
        fileData = JSON.parse(data);
        const hashedPassword = await hashPassword(body.password);
        const user = {
          id: fileData.users.length + 1,
          role: "buyer",
          ...body,
          password: hashedPassword,
        };
        fileData.users.push(user);
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
