const axios = require('axios');

const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const routeUrl = `${process.env.APP_ENV == 'local' ? process.env.ENDPOINT_URL_DEV : process.env.ENDPOINT_URL_PROD}`;

const celebrityEarning = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/becued/earning`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/celebrityearning', data);
	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
};

const becuedEarnings = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/becued/earning`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/becueddeduction', data);
	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
};

const becuedEscrow = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/becued/escrow`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/becuedescrow', data);
	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
};

const becuedTransxHistory = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/becued/transaction-history`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/transactionhistory', data);
	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
};

function myHeader() {
	var headers = {
		Authorization: `Bearer ${localStorage.token}`
	};

	return headers;
}

module.exports = { celebrityEarning, becuedEarnings, becuedEscrow, becuedTransxHistory };
