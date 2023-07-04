const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const makePayment = async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      receipt_email: req.body.email,
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};

module.exports = { makePayment };
