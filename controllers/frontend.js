const homeController = (req, res) => {
	res.render('home');
};

// const aboutController = (req, res) => {
// 	res.render('about');
// };

const contactController = (req, res) => {
	res.render('contact');
};

const exploreController = (req, res) => {
	res.render('explore');
};

const loginController = (req, res) => {
	res.render('login');
};
const signupController = (req, res) => {
	res.render('signup');
};

module.exports = {
	homeController,
	// aboutController,
	contactController,
	exploreController,
	loginController,
	signupController,
};
