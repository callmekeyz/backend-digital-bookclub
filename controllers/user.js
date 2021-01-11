// const bcrypt = require('bcryptjs'); //npm install
// const { User } = require('../models');
const { layout } = require('../utils');

const newUser = (req, res) => {
	res.render('create-acct', {
		locals: {},
		...layout,
	});
};

const processNewUser = async (req, res) => {
	// username + password
	// bcrypt - salt and hash
};

const login = (req, res) => {
	res.render('home', {
		// login form is in html home page
		locals: {},
		...layout,
	});
};

const processLogin = async (req, res) => {
	// get user by username
	// check if password is correct
	// save info about user in session
	// once logged in, redirect to profile page
};

const logout = (req, res) => {
	// req.session.destroy
	// redirect user to 'logout/goodbye' page
	res.render('signout');
};

module.exports = {
	newUser,
	processNewUser,
	login,
	processLogin,
	logout,
};
