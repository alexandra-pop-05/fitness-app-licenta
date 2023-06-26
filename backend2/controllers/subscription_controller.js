const express = require("express");
const db = require("../db");

//GET ALL SUBSCRIPTIONS
const getSubscriptions = (req, res) => {
  const q = "SELECT * FROM sql_app.subscriptions";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.status(200).json(data);
  });
};

//GET SUBSCRIPTION BY ID
const getSubscriptionById = (req, res) => {
  const { subscriptionId } = req.params;

  const q = "SELECT * FROM sql_app.subscriptions WHERE subscription_id = ?";

  db.query(q, [subscriptionId], (err, data) => {
    if (err) return res.status(500).json(err);
    else if (res.length === 0) {
      res.status(404).json({ err: "Product not found." });
    } else return res.status(200).json(data);
  });
};

module.exports = { getSubscriptions, getSubscriptionById };
