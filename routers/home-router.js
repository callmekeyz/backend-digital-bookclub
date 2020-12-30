const express = require('express');
const router = express.Router();
const { homeHandler } = require('../controllers/home-controller');

router.get('/', homeHandler);

module.exports = router;
