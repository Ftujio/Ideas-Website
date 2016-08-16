var express = require('express');
var router = express.Router();

var sessionCheck = require('./session-check');

router.get('/', sessionCheck.isLoggedIn, function(req, res, next) {
	res.render('account');
});

module.exports = router;