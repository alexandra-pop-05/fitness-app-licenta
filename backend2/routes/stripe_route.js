const router = require("express").Router();
const { makePayment } = require("../controllers/stripe_controller");

router.post("/payment", makePayment);

module.exports = router;
