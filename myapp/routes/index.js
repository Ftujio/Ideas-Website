var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Article = require('../models/article');

var sessionCheck = require('./session-check');

/*var data = [
	{
		name: "Svetlin Yodanov",
		email: "fake@gmail.com",
		password: "sth",
	},
	{
		name: "Billy Johnes",
		email: "b.johnes@hotmail.com",
		password: "mothertrucker",
	}
];*/

/* GET home page. */
router.get('/', function(req, res, next) {
	Article.find({}, function(err, docs){
		if(err){
			console.log('Find: ' + err);
		}

		for(var i = 0; i < docs.length; i++){
			docs[i].text = docs[i].text.replace(/\\n/g, "<br><br>");
		}
		res.locals.posts = docs;

		res.render('index');
	});
});

router.post('/submit', function(req, res){
	console.log('Comment: Comment submition requested for article with post id ' + req.body.postId);
});

module.exports = router;
