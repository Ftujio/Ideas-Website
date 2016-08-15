var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	var messages = req.flash('error');
	res.render('login', {csrfToken: req.csrfToken(), messages: messages});
});

router.post('/submit', passport.authenticate('local.signin', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}));

module.exports = router;
