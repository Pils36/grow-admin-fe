const express = require('express');

const router = express.Router();

const { login, register, loginAdmin } = require('../controllers/Authentication');

router.get('/login', login);

router.get('/register', register);

router.post('/login-admin', loginAdmin);

module.exports = router;
