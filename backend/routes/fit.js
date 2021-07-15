const express = require('express');
const router = express.Router();

const { list, create, remove, fitById, photo, readfitnes } = require('../controllers/fitController');


router.get('/fitness', list);
router.post('/create', create);
router.get('/photo/:fitId', photo);
router.get('/:fitId', readfitnes);
router.delete('/:fitId', remove);

router.param("fitId", fitById);

module.exports = router;