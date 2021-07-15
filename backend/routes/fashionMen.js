const express = require('express');
const router = express.Router();

const { list, create, remove, fashionMenById, photo, readfashionmen } = require('../controllers/fashionMenController');


router.get('/fashionMens', list);
router.post('/create', create);
router.get('/photo/:fashionMenId', photo);
router.get('/:fashionMenId', readfashionmen);
router.delete('/:fashionMenId', remove);

router.param("fashionMenId", fashionMenById);

module.exports = router;