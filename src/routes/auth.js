const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
	res.render('./pages/auth/login');
});

router.get('/register', (req, res) => {
	res.render('./pages/auth/register');
});

module.exports = router;
