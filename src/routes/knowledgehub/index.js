const express = require('express');
const router = express.Router();


const { getKnowledge, createKnowledge } = require('../../controllers/KnowlegeHubController')

router.get('/', getKnowledge);


module.exports = router;