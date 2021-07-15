const express = require('express');
const router = express.Router();

const { list, create, remove, foodById, photo, read, update } = require('../controllers/foodController');


router.get('/foods', list);
router.post('/create', create);
router.get('/photo/:foodId', photo);
router.get('/:foodId', read);
router.delete('/:foodId', remove);
router.get('/:foodId', update);

router.param("foodId", foodById);

module.exports = router;