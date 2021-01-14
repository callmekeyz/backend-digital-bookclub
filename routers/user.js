const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router
	.get('/new', userController.newUser)
	.post('/new', userController.processNewUser);

router
	.get('/home', userController.login)
	.post('/home', userController.processLogin)
	.get('/member-profile', userController.profileController);

router
	.get('/logout', userController.logout)
	.get('/explore', userController.explore);

module.exports = router;
