const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

//registration end point
router.post("/register", async (req, res) => {
  try {
    const { email, pass } = req.body;
    //check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    //hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    //creating new user
    const user = new User({
      email,
      password: hashPassword,
    });
  } catch (e) {}
});
