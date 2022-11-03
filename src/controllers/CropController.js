const axios = require('axios');
const routeUrl = `${process.env.NODE_ENV == 'local' ? process.env.ENDPOINT_URL_DEV : process.env.ENDPOINT_URL_PROD}`;

const getCrop = async (req, res) => {
    try {

        const config = {
            method: 'GET',
            url: `${routeUrl}/crop`,
            headers: myHeader()
        };

        const result = await axios(config);

        const data = result.data;

        res.render('./pages/crop/index', data);

    } catch (error) {
        if (error.response) {
            res.render('./pages/error/400', { error: error.response.data.message });
        } else {
            res.render('./pages/error/400', { error: error.message });
        }
    }
}


const createCrop = async (req, res) => {
    try {

        let file = "";
        const { name, category } = req.body;

        if (req.files != null) {
            file = req.files.image.tempFilePath;
        }


        const config = {
            method: 'POST',
            url: `${routeUrl}/crop/create`,
            headers: myHeader(),
            data: {
                name, category,
                image: file
            }
        };

        const result = await axios(config);

        return res.status(200).json({
            data: result.data,
            message: result.message,
            status: result.status
        });

    } catch (error) {

        let message = "Something went wrong";

        if (error.response) {
            message = error.response.data.message;
        } else {
            message = error.message;
        }

        return res.status(400).json({
            data: [],
            message: message,
        });
    }
}
const editCrop = async (req, res) => {
    try {

        let file = "";
        const { name, category } = req.body;

        if (req.files != null) {
            file = req.files.image.tempFilePath;
        }

        
        const config = {
            method: 'PUT',
            url: `${routeUrl}/crop/update/${req.params.id}`,
            headers: myHeader(),
            data: {
                name, category,
                image: file
            }
        };

        const result = await axios(config);

        return res.status(200).json({
            data: result.data,
            message: result.message,
            status: result.status
        });

    } catch (error) {

        let message = "Something went wrong";

        if (error.response) {
            message = error.response.data.message;
        } else {
            message = error.message;
        }

        return res.status(400).json({
            data: [],
            message: message,
        });
    }
}


const deleteCrop = async (req, res) => {
    try {

        const config = {
            method: 'DELETE',
            url: `${routeUrl}/crop/delete/${req.params.id}`,
            headers: myHeader()
        };

        const result = await axios(config);

        return res.status(200).json({
            data: result.data,
            message: result.message,
            status: result.status
        });

    } catch (error) {

        let message = "Something went wrong";

        if (error.response) {
            message = error.response.data.message;
        } else {
            message = error.message;
        }

        return res.status(400).json({
            data: [],
            message: message,
        });
    }
}




function myHeader() {
    var headers = {
        Authorization: `Bearer ${localStorage.token}`
    };

    return headers;
}


module.exports = { getCrop, createCrop, editCrop, deleteCrop }