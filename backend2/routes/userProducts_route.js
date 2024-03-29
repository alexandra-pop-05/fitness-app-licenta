const express = require("express");
const {
  getProductsOfUser,
  addProductBought,
} = require("../controllers/userProducts_controller");
const authenticateUser = require("../controllers/authMiddleware");

const router = express.Router();

//GET ALL PRODUCTS OF A USER
router.get("/myproducts", authenticateUser, getProductsOfUser);

//ADD A PRODUCT TO A USER
router.post("/myproducts", addProductBought);

module.exports = router;
