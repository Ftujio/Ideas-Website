var express = require('express');
var router = express.Router();
var database = require('../database');

database.connect_to_db();

/* GET home page. */
router.get('/', function(req, res, next) {
	database.find({"name": "Svetlin Yordanov"}, 'users', function(user){
		console.log(user.email);
	}, 0);
});

module.exports = router;
