var express = require('express');
var router = express.Router();
var db = require('../database');
var logged_in;

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
	if(req.session.success){
		logged_in = true;
	}
	res.render('index', {logged_in: logged_in});
});

module.exports = router;
