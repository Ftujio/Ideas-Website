var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('register', {csrfToken: req.csrfToken()});
});

router.post('/submit', function(req, res, next){
	res.redirect('/');
});

module.exports = router;
