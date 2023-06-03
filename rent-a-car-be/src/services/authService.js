const { getUsers } = require("./UserService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signInUser = async function (data) {
  try {
    const collection = await getUsers();
    const foundUser = collection.users.find(function (user) {
      return user.username === data.username;
    });
    if (!foundUser) {
      throw new Error(`Didn't find user with this username.`);
    }

    const isMatch = bcrypt.compareSync(data.password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        { _id: foundUser.id?.toString(), name: foundUser.username },
        process.env.JWT_SECRET || "secret",
        {
          expiresIn: "2 days",
        }
      );
      return { user: foundUser, token: token };
    } else {
      throw new Error("Password is not correct.");
    }
  } catch (error) {
    throw error;
  }
};
