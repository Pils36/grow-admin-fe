const axios = require('axios');

const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const routeUrl = `${process.env.NODE_ENV == 'local' ? process.env.ENDPOINT_URL_DEV : process.env.ENDPOINT_URL_PROD}`;

const getIndustryList = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/becued/get-industry`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/category-list', data);
	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
};

const frequentlyAskedQuestions = async (req, res) => {
	try {
		const config = {
			method: 'GET',
			url: `${routeUrl}/becued/get-faq`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/faq', data);
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

const celebrityProfileInformation = async (req, res) => {
	try {

		var _id = req.url.split("=")[1];

		const config = {
			method: 'GET',
			url: `${routeUrl}/becued/get-celeb-profile/${_id}`,
			headers: myHeader()
		};

		const result = await axios(config);

		const data = result.data;

		res.render('./pages/home/celebprofileedit', data);

	} catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
}

module.exports = { getIndustryList, frequentlyAskedQuestions, celebrityProfileInformation };
