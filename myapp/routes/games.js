var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('games', { title: 'Express' });
	//console.log("path: " + req.path);
	//console.log("url: " + req.url);
});

module.exports = router;
