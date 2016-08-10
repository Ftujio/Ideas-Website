var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/ideaswebsite';

	MongoClient.connect(url, function(err, db){
		if(err){
			console.log('Unable to connect to the server ', err);
		} else {
			console.log('Connected to server');
			var collection = db.collection('users');

			collection.find({}).toArray(function(err, result){
				if(err){
					console.log(err);
				} else if(result.length){
					res.render('index', {"users": result});
				} else {
					console.log('No documents found');
				}
				db.close();
			});
		}
	});
});

module.exports = router;
