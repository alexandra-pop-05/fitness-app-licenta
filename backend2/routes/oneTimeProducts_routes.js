const express = require("express");
const {
  getProductById,
  getProducts,
  addProducts,
} = require("../controllers/oneTimeProduct_controller");

const router = express.Router();

router.get("/products/:productId", getProductById);
router.get("/products", getProducts);
router.post("/products", addProducts);

module.exports = router;
