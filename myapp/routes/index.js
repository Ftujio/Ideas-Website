var express = require('express');
var router = express.Router();
var db = require('../database');

db.connect_to_db();

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
	db.find({"name": "Svetlin Yodanov"}, 'users', function(users){
		console.log(users[0].name);
		//res.render('index', {"user": users});
	});
});

module.exports = router;
