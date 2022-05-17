const bcrypt = require("bcryptjs");
const Users = require("../schema/userModel");
const generateToken = require("../utils/generateToken");

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
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
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
    const user = await Users.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        status: "Succesful Login",
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
