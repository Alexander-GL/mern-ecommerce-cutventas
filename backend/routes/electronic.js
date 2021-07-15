const express = require('express');
const router = express.Router();

const { list, create, remove, electronicById, photo, readelectronic } = require('../controllers/electronicController');


router.get('/electronics', list);
router.post('/create', create);
router.get('/photo/:electronicId', photo);
router.get('/:electronicId', readelectronic);
router.delete('/:electronicId', remove);

router.param("electronicId", electronicById);

module.exports = router;