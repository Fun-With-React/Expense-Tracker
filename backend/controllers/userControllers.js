const bcrypt = require("bcryptjs");
const Users = require("../schema/userModel");

exports.register = async (req, res) => {
  const { name, email, confirmEmail, password } = req.body;

  const userExists = await Users.findOne({ email });

  if (userExists) {
    res.status(409).send({
      status: "User already exists",
    });
    return;
  }
  try {
    const user = await Users.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).send({
        status: "Registered Succesful",
      });
      return;
    }
  } catch (error) {
    res.status(400).send({
      status: " Please Try Again Later",
      data: error,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await Users.findOne({ email });

    if (userExists && bcrypt.compareSync(password, userExists.password)) {
      res.status(200).send({
        status: "Succesful Login",
        data: userExists,
      });
      return;
    } else {
      res.status(403).send({
        status: "Password/Email Wrong",
      });
      return;
    }
  } catch (error) {
    res.status(400).send({
      status: " Please Try Again Later",
      data: error,
    });
  }
};
