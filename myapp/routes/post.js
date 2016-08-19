var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Article = require('../models/article');

var sessionCheck = require('./session-check');

router.get('/', sessionCheck.isLoggedIn, function(req, res, next) {
	res.render('post');
});

router.post('/submit', function(req, res, next){
	User.findById(req.session.uid, function(err, found){
		if(err){
			console.log('Find: ' + err);
		}

		var article = new Article();

		article.title = req.body.post_title;
		article.text = req.body.post_text;
		article.author = found.name;
		article.author_id = req.session.uid;
		article.date = new Date();
		article.score = 0;
		
		article.save(function(err, result){
			if(err){
				console.log('Database save: ' + err);
			}
			console.log('Post: User ' + found.name + ' is submitting a post');
		});

		res.redirect('/post');
	});
});

module.exports = router;