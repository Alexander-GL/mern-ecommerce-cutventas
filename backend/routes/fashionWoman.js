const express = require('express');
const router = express.Router();

const { list, create, remove, fashionWomanById, photo, readfashionwoman } = require('../controllers/fashionWomanController');


router.get('/fashionWomans', list);
router.post('/create', create);
router.get('/photo/:fashionWomanId', photo);
router.get('/:fashionWomanId', readfashionwoman);
router.delete('/:fashionWomanId', remove);

router.param("fashionWomanId", fashionWomanById);

module.exports = router;