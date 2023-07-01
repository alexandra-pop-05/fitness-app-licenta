const express = require("express");
const db = require("../db");
//GET USER BY ID
const getUser = (req, res) => {
  try {
    const q = "SELECT * FROM sql_app.users WHERE user_id = ?";
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//GET ALL USERS
const getAllUsers = (req, res) => {
  try {
    const q = "SELECT * FROM sql_app.users";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) return res.status(404).json("Users not found!");
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  getAllUsers,
};
