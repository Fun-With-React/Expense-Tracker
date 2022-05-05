const User = require("../models/User");

exports.register = (req, res) => {
  const user = new User(req.body);
  user.register();
  console.log("%c 🧛‍♀️: exports.register -> req ", "font-size:16px;background-color:#04f9b1;color:black;", req.body);
};

exports.login = (req, res) => {};
