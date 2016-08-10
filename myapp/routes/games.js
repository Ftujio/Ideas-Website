var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.path);
	res.render('games', { title: 'Express' });
});

module.exports = router;
