const axios = require('axios');
const routeUrl = `${process.env.NODE_ENV == 'local' ? process.env.ENDPOINT_URL_DEV : process.env.ENDPOINT_URL_PROD}`;

const getKnowledge = async (req, res) => {
    try {

        const config = {
            method: 'GET',
            url: `${routeUrl}/knowledge`,
            headers: myHeader()
        };

        const result = await axios(config);

        const data = result.data;

        res.render('./pages/kbs/index', data);
        
    } catch (error) {
		if (error.response) {
			res.render('./pages/error/400', { error: error.response.data.message });
		} else {
			res.render('./pages/error/400', { error: error.message });
		}
	}
}


const createKnowledge = async (req, res) => {
    try {

        let file = "";
        const { crop, module, title, subTitle, content } = req.body;

        if (req.files != null) {
            file = req.files.cropFile.tempFilePath;
        }


        const config = {
            method: 'POST',
            url: `${routeUrl}/knowledge/create`,
            headers: myHeader(),
            data: {
                crop, module, title, subTitle, content,
                cropFile: file
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


const editKnowledge = async (req, res) => {
    try {

        let file = "";
        const { crop, module, title, subTitle, content } = req.body;

        if (req.files != null) {
            file = req.files.cropFile.tempFilePath;
        }


        const config = {
            method: 'PUT',
            url: `${routeUrl}/knowledge/update/${req.params.id}`,
            headers: myHeader(),
            data: {
                crop, module, title, subTitle, content,
                cropFile: file
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


const deleteKbs = async (req, res) => {
    try {

        const config = {
            method: 'DELETE',
            url: `${routeUrl}/knowledge/delete/${req.params.id}`,
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


module.exports = { getKnowledge, createKnowledge, editKnowledge, deleteKbs }