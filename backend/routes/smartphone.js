const express = require('express');
const router = express.Router();

const { list, create, remove, smartphoneById, photo, readsmartphone } = require('../controllers/smartphoneController');


router.get('/smartphones', list);
router.post('/create', create);
router.get('/photo/:smartphoneId', photo);
router.get('/:smartphoneId', readsmartphone);
router.delete('/:smartphoneId', remove);

router.param("smartphoneId", smartphoneById);

module.exports = router;