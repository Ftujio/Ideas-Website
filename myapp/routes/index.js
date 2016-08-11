var express = require('express');
var router = express.Router();
var database = require('../database');

database.connect_to_db();
console.log(database.test);

/* GET home page. */
router.get('/', function(req, res, next) {
	database.find({}, 'users');
});

module.exports = router;
