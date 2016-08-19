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
			docs[i].text = docs[i].text.replace(/\n/g, '<p class="post_text">');
			docs[i].text = docs[i].text.replace(/#t/g, '<h1 class="post_small_heading">');
			docs[i].text = docs[i].text.replace(/t#/g, '</h1>');
		}
		res.locals.posts = docs;

		res.render('index');
	});
});

router.post('/submit/comment/:postId', function(req, res){
	var post_id = req.params.postId;
	console.log('Comment: Comment submition requested for article with id ' + post_id);
	User.findById(req.session.uid, function(err, doc){
		Article.findByIdAndUpdate(post_id,
			{$push: {"comments": 
				{
					text: req.body.comment_text,
					author: doc.name,
					date: new Date()
				}
			}},
			{safe: true, upsert: true},
			function(err, model){
				if(err){
					console.log('Find: ' + err);
				}

				res.redirect('/');
			}
		);
	});
});

router.post('/submit/vote/post/:pid', function(req, res){
	var post_id = req.params.pid;
	var action = req.body.submit;
	var liked = false;
	var disliked = false;

	if(action == 'Upvote'){
		console.log('Vote: User ' + req.session.uid + ' upvoted post with id ' + post_id);
		Article.findById(post_id, function(err, doc){
			if(err){
				console.log('Error: ' + err);
			}
			
			for(var i = 0; i < doc.u_liked.length; i++){
				if(doc.u_liked[i] == req.session.uid){
					console.log('here');
					liked = true;
				}
			}

			if(!liked){
				doc.likes += 1;
				console.log(doc.likes);
				doc.u_liked.push(req.session.uid);
				doc.save();
			}
		});
	} else if(action == 'Downvote'){
		console.log('Vote: User ' + req.session.uid + ' downvoted post with id ' + post_id);
		Article.findById(post_id, function(err, doc){
			if(err){
				console.log('Error: ' + err);
			}
			
			for(var i = 0; i < doc.u_liked.length; i++){
				if(doc.u_dis_liked[i] == req.session.uid){
					console.log('here');
					disliked = true;
				}
			}

			if(!disliked){
				doc.likes -= 1;
				disliked = true;
				delete doc.u_liked[i]
				doc.save();
			}
		});
	}

	res.redirect('/');
});

module.exports = router;
