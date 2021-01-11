const homeController = (req, res) => {
	res.render('home');
};

const exploreController = (req, res) => {
	res.render('explore');
};

module.exports = {
	homeController,
	createController,
	exploreController,
};
