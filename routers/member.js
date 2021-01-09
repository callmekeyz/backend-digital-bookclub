const express = require('express');
const {
	profileController,
	bookController,
	signoutController,
} = require('../controllers/member');
const router = express.Router();

// member profile page
router.get('/profile', profileController);

// view book page
router.get('/book', bookController);

// sign out page
router.get('/signout', signoutController);

module.exports = router;
