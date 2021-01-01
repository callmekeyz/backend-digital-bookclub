const express = require('express');
const router = express.Router();

// importing front end controller functions
const {
	homeController,
	aboutController,
	contactController,
	exploreController,
	loginController,
	signupController,
} = require('../controllers/frontend');

// main home page
router.get('/', homeController);

// about page
router.get('/about', aboutController);

// contact page
router.get('/contact', contactController);

// explore page
router.get('/explore', exploreController);

// login page
router.get('/login', loginController);

// sign up page
router.get('/signup', signupController);

module.exports = router;
