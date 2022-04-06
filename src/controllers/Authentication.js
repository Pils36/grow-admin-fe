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

const loginAdmin = async (req, res) => {
	try {
		data = req.body;

		const response = await axios({
			method: 'POST',
			url: `${process.env.APP_ENV == 'local'
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

module.exports = { login, register, loginAdmin };
