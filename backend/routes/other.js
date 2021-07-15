const express = require('express');
const router = express.Router();

const { list, create, remove, otherById, photo, readother } = require('../controllers/otherController');


router.get('/others', list);
router.post('/create', create);
router.get('/photo/:otherId', photo);
router.get('/:otherId', readother);
router.delete('/:otherId', remove);

router.param("otherId", otherById);

module.exports = router;