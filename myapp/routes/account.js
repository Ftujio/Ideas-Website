var express = require('express');
var router = express.Router();

var sessionCheck = require('./session-check');

router.get('/', isLoggedIn, function(req, res, next) {
	
});

module.exports = router;