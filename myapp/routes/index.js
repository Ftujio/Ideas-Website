var express = require('express');
var router = express.Router();
var app = express();

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));


var c = require('nav');

/* GET home page. */
router.use(function(req, res, next	){
	console.log(c.res);
	
	next();
});

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;
