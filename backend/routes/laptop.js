const express = require('express');
const router = express.Router();

const { list, create, remove, laptopById, photo, readlaptop } = require('../controllers/laptopController');


router.get('/laptops', list);
router.post('/create', create);
router.get('/photo/:laptopId', photo);
router.get('/:laptopId', readlaptop);
router.delete('/:laptopId', remove);

router.param("laptopId", laptopById);

module.exports = router;