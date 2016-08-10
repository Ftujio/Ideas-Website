var express = require('express');
var router = express.Router();
var app = express();

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;
