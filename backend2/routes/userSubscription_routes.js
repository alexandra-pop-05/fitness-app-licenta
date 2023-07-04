const express = require("express");
const {
  addSubscriptionBought,
  getSubscriptionOfUser,
} = require("../controllers/userSubscription_controller");
const authenticateUser = require("../controllers/authMiddleware");

const router = express.Router();

//GET ALL PRODUCTS OF A USER
router.get("/myproducts", authenticateUser, getSubscriptionOfUser);

//ADD A PRODUCT TO A USER
router.post("/myproducts", addSubscriptionBought);

module.exports = router;
