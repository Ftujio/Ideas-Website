var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var sessionCheck = require('./session-check');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', sessionCheck.notLoggedIn, function(req, res, next) {
	var messages = req.flash('error');
	res.render('register', {csrfToken: req.csrfToken(), messages: messages});
});

router.post('/submit', passport.authenticate('local.signup', {
	successRedirect: '/',
	failureRedirect: '/register',
	failureFlash: true
}));

module.exports = router;
