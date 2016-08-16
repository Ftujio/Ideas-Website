var express = require('express');
var router = express.Router();
var User = require('../models/user');

var sessionCheck = require('./session-check');

router.get('/', sessionCheck.isLoggedIn, function(req, res, next) {
	User.findById(req.session.uid, function(err, found){
		var name = found.name;
		var email = found.email;

		res.render('account', {
			name: name,
			email: email
		});
	});
});

module.exports = router;