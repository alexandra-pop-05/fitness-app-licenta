const authenticateUser = require("../controllers/authMiddleware");
const express = require("express");
const router = express.Router();
const { getUser, getAllUsers } = require("../controllers/user_controller");

//GET USER
router.get("/find/:id", authenticateUser, getUser);

//GET ALL USERS
router.get("/all", authenticateUser, getAllUsers);

module.exports = router;
