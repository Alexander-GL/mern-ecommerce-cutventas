const express = require('express');
const router = express.Router();

const { list, readbook, create, remove, bookById, photo } = require('../controllers/bookController');


router.get('/books', list);
router.post('/create', create);
router.get('/photo/:bookId', photo);
router.get('/:bookId', readbook);
router.delete('/:bookId', remove);

router.param("bookId", bookById);

module.exports = router;