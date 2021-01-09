const homeController = (req, res) => {
	res.render('home');
};

const createController = (req, res) => {
	res.render('create-acct');
};

const exploreController = (req, res) => {
	res.render('explore');
};

module.exports = {
	homeController,
	createController,
	exploreController,
};
