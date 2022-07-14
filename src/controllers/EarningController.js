const axios = require('axios');

const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const routeUrl = `${process.env.NODE_ENV == 'local' ? process.env.ENDPOINT_URL_DEV : process.env.ENDPOINT_URL_PROD}`;

const celebrityEarning = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/earning`,
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

const growngEarnings = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/earning`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/homededuction', data);
	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
};

const growngEscrow = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/escrow`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/homeescrow', data);
	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
};

const growngTransxHistory = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/transaction-history`,
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

const setupPricing = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/pricing-list`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/pricing-list', data);
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

module.exports = { celebrityEarning, growngEarnings, growngEscrow, growngTransxHistory, setupPricing };
