var express = require('express');
var router = express.Router();
var db = require('../database');

db.connect_to_db();

/* GET home page. */
router.get('/', function(req, res, next) {
	
});

module.exports = router;
