var express = require('express');
var router = express.Router();
var db = require('../database');

db.connect_to_db();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('passing "' + req.session.errors + '" to the ejs file');
	res.render('register', {success: req.session.success, errors: req.session.errors});
	req.session.errors = null;
	req.session.success = null;
});

router.post('/submit', function(req, res, next){
	req.check('email', 'Not a valid email adress').isEmail();
	req.check('password', 'Password too short').isLength({min: 4});

	var errors = req.validationErrors();
	if(errors){
		req.session.errors = errors;
		console.log(req.session.errors);
		req.session.success = false;
		res.redirect('/register');
	} else { // The information is valid
		req.session.success = true;
		var name = req.body.name;
		var email = req.body.email;
		var password = req.body.password;
		var data = {
			name: name,
			email: email,
			password: password
		};

		db.insert(data, 'users');
		res.redirect('/');
	}
});

module.exports = router;
