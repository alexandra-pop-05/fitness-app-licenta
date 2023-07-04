const express = require("express");
const {
  addTestimonial,
  getTestimonials,
} = require("../controllers/testimonials_controller");
const authMiddleware = require("../controllers/authMiddleware");

const router = express.Router();

//ADD A TESTIMONIAL
router.post("/testimonials", authMiddleware, addTestimonial);

//GET TESTIMONIALS
router.get("/testimonials", getTestimonials);

module.exports = router;
