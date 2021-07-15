const express = require('express');
const router = express.Router();
const {userById} = require('../controllers/authController');

const { list, create, remove, productById, readproduct } = require('../controllers/productController');


router.get('/products', list);
router.post('/create/:userById', create);
//router.get('/:productId', readproduct);
router.delete('/:productId', remove);

router.param("productId", productById);
router.param('userId', userById);

module.exports = router;