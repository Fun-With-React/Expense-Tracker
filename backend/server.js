const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello expense tracker");
});

app.listen(5000, console.log("Server is running on Port 5000"));
