const express = require("express");
const {
  getSubscriptions,
  getSubscriptionById,
} = require("../controllers/subscription_controller");

const router = express.Router();

router.get("/subscriptions", getSubscriptions);
router.get("/subscriptions/:subscriptionId", getSubscriptionById);

module.exports = router;
