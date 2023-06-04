const fs = require("fs");
const bcrypt = require("bcrypt");

async function hashPassword(plainPassword) {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
}

module.exports.getUsers = async function () {
  try {
    const data = await fs.promises.readFile("data/Users.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};

module.exports.getUserById = async function (id) {
  try {
    const data = await fs.promises.readFile("data/Users.json", "utf8");
    const users = JSON.parse(data).users;
    const foundedUser = users.find(function (user) {
      return user.id === id;
    });
    if (!foundedUser) {
      throw new Error("User not found!");
    }
    return foundedUser;
  } catch {
    throw new Error();
  }
};

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
          id: (fileData.users.length + 1).toString(),
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

module.exports.editUser = async function (body, id) {
  try {
    const users = await this.getUsers();
    const foundedUser = users.find(function (user) {
      user.id = id;
    });
    if (!foundedUser) {
      throw new Error("User not found!");
    }
    if (body.oldPassword && body.newPasword) {
      const isMatch = bcrypt.compareSync(
        body.oldPassword,
        foundedUser.password
      );
      if (isMatch) {
        throw new Error("Old password is wrong!");
      }
      body.password = await hashPassword(body.newPasword);
      delete body.oldPassword;
      delete body.newPasword;
    }
    const editedUsers = users.map(function (user) {
      if (user.id === id) {
        return { ...user, ...body };
      } else {
        return user;
      }
    });
    const newData = JSON.stringify({ users: editedUsers });
    await fs.promises.writeFile("data/Users.json", newData);
    return { ...foundedUser, ...body };
  } catch (error) {
    throw error;
  }
};
