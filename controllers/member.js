const profileController = (req, res) => {
	res.render('member-profile');
};

const bookController = (req, res) => {
	res.render('book');
};

const signoutController = (req, res) => {
	res.render('signout');
};

module.exports = {
	profileController,
	bookController,
	signoutController,
};
