var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Article = require('../models/article')

var sessionCheck = require('./session-check');

router.get('/', sessionCheck.isLoggedIn, function(req, res, next) {
	User.findById(req.session.uid, function(err, found){
		if(err){
			console.log('Find: ' + err);
		}

		res.locals.user_name = found.name;
		res.locals.user_email = found.email;

		Article.find({author_id: req.session.uid}, function(err, docs){
			res.locals.posts = docs;
			
			res.render('account');
		});
	});
});

module.exports = router;