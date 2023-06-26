const express = require("express");
const db = require("../db");

//GET PRODUCT BY ID
const getProductById = (req, res) => {
  const { productId } = req.params;

  const q = "SELECT * FROM sql_app.onetimeproducts WHERE product_id = ?";

  db.query(q, [productId], (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the product." });
    } else if (data.length === 0) {
      return res.status(404).json({ error: "Product not found." });
    } else return res.status(200).json(data);
  });
};

//GET ALL PRODUCTS
const getProducts = (req, res) => {
  const q = "SELECT * FROM sql_app.onetimeproducts";

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the products." });
    } else if (data.length === 0) {
      return res.status(404).json({ err: "Product not found." });
    } else return res.status(200).json(data);
  });
};

module.exports = { getProductById, getProducts };
