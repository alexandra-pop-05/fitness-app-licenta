const express = require('express');
const addUser = require('../controllers/user_controller');

const router = express.Router();

 router.get('/users', addUser); 

module.exports = router;