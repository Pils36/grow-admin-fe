const express = require('express');

const router = express.Router();

const {
	login,
	register,
	forgotPassword,
	resetPassword,
	loginAdmin,
	adminLogout,
	postForgotPassword,
	postResetPassword
} = require('../controllers/Authentication');

router.get('/login', login);

router.get('/register', register);

router.get('/forgot-password', forgotPassword);
router.get('/reset-password', resetPassword);

router.post('/login-admin', loginAdmin);
router.post('/logout-admin', adminLogout);
router.post('/forgotpassword', postForgotPassword);
router.post('/resetpassword', postResetPassword);

module.exports = router;
