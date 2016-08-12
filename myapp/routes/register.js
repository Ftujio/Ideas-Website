var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('passing "' + req.session.errors + '" to the ejs file');
	res.render('register', {success: req.session.success, errors: req.session.errors});
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
	} else {
		req.session.success = true;
		console.log(req.body.email);
		res.redirect('/');
	}
});

module.exports = router;
