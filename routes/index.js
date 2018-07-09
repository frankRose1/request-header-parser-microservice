const express = require('express');
const router = express.Router();
const headerParserController = require('../controllers/headerParser');

router.get('/', headerParserController.renderHomePage);

router.get('/api/whoami', headerParserController.parseHeader );

module.exports = router;
