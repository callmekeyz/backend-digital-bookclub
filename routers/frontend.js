const express = require('express');
const router = express.Router();

// importing front end controller functions
const {
	homeController,
	createController,
	exploreController,
} = require('../controllers/frontend');

// main home page
router.get('/', homeController);

// create account page
router.get('/create', createController);

// explore page
router.get('/explore', exploreController);

module.exports = router;
