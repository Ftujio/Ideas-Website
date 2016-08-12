var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('register', {success: req.session.success, errors: req.session.errors});
	req.session.errors = null;
	req.session.success = null;
});

router.post('/submit', function(req, res, next){
	req.check('email', 'Not a valid email adress').isEmail();
	req.check('password', 'Password too short').isLength({min: 4});

	var errors = req.validatorErrors();
	if(errors){
		req.session.errors = errors;
		req.session.success = false;
	} else {
		req.session.success = true;
		console.log(req.email);
	}
	res.redirect('/');
});

module.exports = router;
