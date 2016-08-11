var express = require('express');
var router = express.Router();
var db = require('../database');

db.connect_to_db();

/* GET home page. */
router.get('/', function(req, res, next) {
	db.find({"name": "Duudi McGoogly"}, 'users', function(user){
		console.log(user.name);
		console.log(user.email);
		console.log(user.password);
		console.log(user.account);
	}, 0);
});

module.exports = router;
