const {
	Book
} = require('../models');
const {
	layout
} = require('../utils');

const bookForm = (req, res) => {
	res.render('addbook', {
		locals: {
			title: 'Add New Book',
		},
		...layout,
	});
};

const processBookForm = async (req, res) => {
	const {
		title,
		author
	} = req.body;
	const {
		id
	} = req.session.user;
	console.log(title, author);

	if (title && author && id) {
		const newBook = await Book.create({
			title,
			author,
			status,
			memberId: id,
		});
		console.log(newBook);
		req.session.save(() => {
			res.redirect('/member-profile');
		});
	}
};

const showBookList = async (req, res) => {
	const {
		id
	} = req.session.user;
	if (id) {
		const books = await Book.findAll({
			where: {
				memberId: id,
			},
		});
		res.render('booklist', {
			locals: {
				books,
			},
			...layout,
		});
	} else {
		res.redirect('/');
	}
};

const delBook = async (req, res) => {
	const {
		id
	} = req.session.user;
	const {
		bookId
	} = req.params;
	if (id && bookId) {
		const book = await Book.destroy({
			where: {
				id: bookId,
			},
		});
		console.log(`You deleted book item with id ${bookId}.`);
		res.redirect('/list');
	} else {
		res.redirect('/');
	}
};

const showEditList = async (req, res) => {
	const {
		id
	} = req.session.user;
	const {
		bookId
	} = req.params;
	if (id && bookId) {
		const book = await Book.findOne({
			where: {
				id: bookId,
			},
		});
		console.log(`You are editing Book item with id ${bookId}.`);
		res.render('booklist', {
			locals: {
				book,
			},
			...layout,
		});
	} else {
		res.redirect('/');
	}
};

const processEditList = async (req, res) => {
	const {
		id
	} = req.session.user;
	const {
		bookId
	} = req.params;
	const {
		title,
		author,
		status
	} = req.body;

	if (id && bookId) {
		const book = await Book.update({
			title,
			author,
			status,
		}, {
			where: {
				id: bookId,
			},
		});
		console.log(`You updated Book item with id ${bookId}.`);
		res.redirect('/list');
	} else {
		res.redirect('/');
	}
};

module.exports = {
	bookForm,
	processBookForm,
	showBookList,
	delBook,
	showEditList,
	processEditList,
};