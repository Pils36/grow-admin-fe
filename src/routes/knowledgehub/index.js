const express = require('express');
const router = express.Router();


const { getKnowledge, createKnowledge, editKnowledge, deleteKbs } = require('../../controllers/KnowlegeHubController')

router.get('/', getKnowledge);
router.post('/create', createKnowledge);
router.post('/edit/:id', editKnowledge);
router.delete('/delete/:id', deleteKbs);


module.exports = router;