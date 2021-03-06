var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Article = require('../models/article');

var sessionCheck = require('./session-check');

router.get('/', sessionCheck.isLoggedIn, function(req, res, next) {
	User.findById(req.session.uid, function(err, found){
		if(err){
			console.log('Find: ' + err);
		}

		res.locals.user_name = found.name;
		res.locals.user_email = found.email;

		Article.find({author_id: req.session.uid}, function(err, docs){
			if(err){
				console.log('Find: ' + err);
			}
			
			for(var i = 0; i < docs.length; i++){
				docs[i].text = docs[i].text.replace(/\n/g, '<p class="post_text">');
				docs[i].text = docs[i].text.replace(/#t/g, '<h1 class="post_small_heading">');
				docs[i].text = docs[i].text.replace(/t#/g, '</h1>');
			}
			res.locals.posts = docs;

			res.render('account');
		});
	});
});

module.exports = router;