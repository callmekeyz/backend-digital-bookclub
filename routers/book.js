const express = require('express');
const router = express.Router();
const {
	showBookList,
	bookForm,
	processBookForm,
	delBook,
	showEditList,
	processEditList,
} = require('../controllers/book');

router
	.get('/', showBookList)
	.get('/newbook', bookForm)
	.post('/newbook', processBookForm)
	.post('/:bookId/delete', delBook)
	.get('/:bookId/edit', showEditList)
	.post('/:bookId/edit', processEditList);

module.exports = router;
