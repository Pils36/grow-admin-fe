const express = require('express');
const router = express.Router();


const { getCrop, createCrop, editCrop, deleteCrop } = require('../../controllers/CropController')

router.get('/', getCrop);
router.post('/create', createCrop);
router.post('/edit/:id', editCrop);
router.delete('/delete/:id', deleteCrop);


module.exports = router;