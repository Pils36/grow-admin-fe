const axios = require('axios');

const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

var headers = {};
var data = {};
var token;
var userData;

const login = (req, res) => {
	res.render('./pages/auth/login');
};

const register = (req, res) => {
	res.render('./pages/auth/register');
};

const forgotPassword = (req, res) => {
	res.render('./pages/auth/forgot-password');
};

const resetPassword = (req, res) => {
	res.render('./pages/auth/reset-password');
};

const loginAdmin = async (req, res) => {
	try {
		data = req.body;

		const response = await axios({
			method: 'POST',
			url: `${process.env.NODE_ENV == 'local'
				? process.env.ENDPOINT_URL_DEV
				: process.env.ENDPOINT_URL_PROD}/auth/login`,
			headers: headers,
			data: data
		});

		token = localStorage.setItem('token', response.data.token);
		userData = localStorage.setItem('user', JSON.stringify(response.data.data));

		res.status(response.status).json({
			data: response.data.data,
			token: response.data.token,
			message: 'Success'
		});
	} catch (error) {
		res.status(401).json({
			data: [],
			message: error.message
		});
	}
};

const adminLogout = async (req, res) => {
	try {
		localStorage.clear();

		res.status(200).json({
			data: true,
			token: null,
			message: 'Success'
		});
	} catch (error) {
		res.status(401).json({
			data: [],
			message: error.message
		});
	}
};

const postForgotPassword = async (req, res) => {
	try {
		data = req.body;
		data.link = `${req.headers.origin}/auth/reset-password`;

		const response = await axios({
			method: 'POST',
			url: `${process.env.NODE_ENV == 'local'
				? process.env.ENDPOINT_URL_DEV
				: process.env.ENDPOINT_URL_PROD}/auth/forgot-password`,
			headers: headers,
			data: data
		});

		res.status(response.status).json({
			data: response.data.data,
			message: response.data.message
		});
	} catch (error) {
		res.status(401).json({
			data: [],
			message: error.message
		});
	}
};

const postResetPassword = async (req, res) => {
	try {
		var userkey = req.headers.referer.split('=')[1];
		data = req.body;
		data.email = atob(userkey);

		if (req.body.new_password != req.body.confirm_password)
			res.status(400).json({
				data: [],
				message: 'Password does not match'
			});

		const response = await axios({
			method: 'POST',
			url: `${process.env.NODE_ENV == 'local'
				? process.env.ENDPOINT_URL_DEV
				: process.env.ENDPOINT_URL_PROD}/auth/reset-password`,
			headers: headers,
			data: data
		});

		res.status(response.status).json({
			data: response.data.data,
			message: response.data.message
		});
	} catch (error) {
		res.status(401).json({
			data: [],
			message: error.message
		});
	}
};

module.exports = {
	login,
	register,
	forgotPassword,
	resetPassword,
	loginAdmin,
	adminLogout,
	postForgotPassword,
	postResetPassword
};
