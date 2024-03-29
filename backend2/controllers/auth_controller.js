const express = require("express");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const authenticateUser = require("./authMiddleware");

//REGISTER
const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM sql_app.users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!"); //status 409 = data already exists

    //Hash password with bcrypt and create a user
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    //now insert user in db
    const qu =
      "INSERT INTO sql_app.users(`username`, `nickname`, `email`, `password`) VALUES(?)";
    const values = [
      req.body.username,
      req.body.nickname,
      req.body.email,
      hashedPassword,
    ];
    db.query(qu, [values], (err, data) => {
      if (err) return res.json(err);
      else return res.status(200).json("User has been created!");
    });
  });
};

//LOGIN
const login = (req, res) => {
  //CHECK USER exists
  const q = "SELECT * FROM sql_app.users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json({ error: err });
    if (data.length === 0)
      return res.status(404).json({ error: "User not found!" });

    //Check password if not error
    //compare the passw from db to the passw we insert
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    ); //data is an array and data[0] is our user

    if (!isPasswordCorrect)
      return res.status(400).json({ error: "Wrong username or password!" });

    //using JWT for loging for security reasons
    //CREATE TOKEN
    //we are going to store our user_id in the token and the token is stored in the cookie
    const token = jwt.sign(
      { user_id: data[0].user_id },
      process.env.JWT_SECRET
    ); //in sign() we should send a user information that identify us: user_id
    const { password, ...other } = data[0]; //taking only specific things from our data / NOT PASSWORD
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

//LOGOUT USING COOKIES
const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out!");
};

module.exports = { register, login, logout };
