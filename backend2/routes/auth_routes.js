const express = require("express");
const { register, login, logout } = require("../controllers/auth_controller");
const authMiddleware = require("../controllers/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", authMiddleware, login);
router.post("/logout", logout);

module.exports = router;
