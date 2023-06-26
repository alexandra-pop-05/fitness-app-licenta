const express = require("express");
const {
  getProductById,
  getProducts,
} = require("../controllers/oneTimeProduct_controller");

const router = express.Router();

router.get("/products/:productId", getProductById);
router.get("/products", getProducts);

module.exports = router;
