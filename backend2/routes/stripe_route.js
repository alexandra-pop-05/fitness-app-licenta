const router = require("express").Router();
const { makePayment } = require("../controllers/stripe_controller");
const AuthMiddleware = require("../controllers/authMiddleware");

router.post("/payment", makePayment);

module.exports = router;
