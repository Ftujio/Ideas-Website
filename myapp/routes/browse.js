var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('browse', { title: 'Express' });
});

router.get('/games', function(req, res, next) {
	res.render('games', { title: 'Express' });
});

router.get('/movies', function(req, res, next) {
	res.render('movies', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
	res.render('books', { title: 'Express' });
});

router.get('/uncategorised', function(req, res, next) {
	res.render('uncategorised', { title: 'Express' });
});

module.exports = router;
