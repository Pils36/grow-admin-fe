const express = require('express');

const router = express.Router();

const { login, register, loginAdmin, adminLogout } = require('../controllers/Authentication');

router.get('/login', login);

router.get('/register', register);

router.post('/login-admin', loginAdmin);
router.post('/logout-admin', adminLogout);

module.exports = router;
