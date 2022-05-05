const Users = require("../schema/userModel");

exports.register = async (req, res) => {
//   const user = new User(req.body);
//   user.register();
//   console.log("%c 🧛‍♀️: exports.register -> req ", "font-size:16px;background-color:#04f9b1;color:black;", req.body);
const { name,email,password } = req.body
const userExists = await Users.findOne({email})

if(userExists) {
  res.status(400)
  throw newError('User already exists')
}
const user = await Users.create({
  name, email, password
})
if(user){
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    
  })
} else{
  res.status(400)
  throw new Error('Invalid user data')
}
};

exports.login = (req, res) => {};
