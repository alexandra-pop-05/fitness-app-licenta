const express = require('express');

const addUser = (req, res) => {
    res.json('from controller');
}

module.exports = addUser;