var express = require('express');
var router = express.Router();
var Article = require('../models/article');

var sessionCheck = require('./session-check');

router.get('/', sessionCheck.isLoggedIn, function(req, res, next) {
	res.render('post');
});

router.post('/submit', function(req, res, next){
	var article = new Article();

	article.title = req.body.post_title;
	article.text = req.body.post_text;
	article.author_id = req.session.uid;
	article.date = new Date();
	article.save(function(err, result){
		if(err){
			console.log('Database save: ' + err);
		}
	});
	res.redirect('/post');
});

module.exports = router;