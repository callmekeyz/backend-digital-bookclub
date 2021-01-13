const bookController = (req, res) => {
	res.render('book');
};

const signoutController = (req, res) => {
	res.render('signout');
};

module.exports = {
	bookController,
	signoutController,
};