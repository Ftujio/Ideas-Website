var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('register', {csrfToken: req.csrfToken()});
});

router.post('/submit', passport.authenticate('local.signup', {
	successRedirect: '/',
	failureRedirect: '/register',
	failureFlash: true
}));

module.exports = router;
