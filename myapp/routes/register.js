var express = require('express');
var router = express.Router();
var db = require('../database');


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('register', {success: req.session.success, errors: req.session.errors});
	req.session.errors = null;
	req.session.success = null;
});

router.post('/submit', function(req, res, next){
	
});

module.exports = router;
