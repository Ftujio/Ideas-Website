var express = require('express');
var router = express.Router();
var db = require('../database');

db.connect_to_db();

/* GET home page. */
router.get('/', function(req, res, next) {
	db.find({}, 'users', function(user, num){
		for(var i = 0; i < num; i++){
			console.log(user[i].name);
			console.log(user[i].email);
			console.log(user[i].password);
			console.log(user[i].account);
			console.log('\n');
		}
	});
});

module.exports = router;
