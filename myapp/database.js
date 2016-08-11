var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/ideaswebsite';
var client;
var res;

function connect_to_db(){
	MongoClient.connect(url, function(err, db){
		if(err){
			console.log('Undable to connect to database');
		} else {
			console.log('Connected to sever');
			client = db;
		}
	});
}

function insert(data, collection, callback){
	if(!client){
		console("Database not initialized!");
	}

	var collection = client.collection(collection);

	collection.insertOne(data, function(err, result){
		if(err){
			console.log(err);
		}
	});
}

function find(query, collection, callback){
	if(!client){
		console("Database not initialized!");
	}

	var collection = client.collection(collection);
	var elements = collection.find(query).toArray(function(err, result){
			if(err){
				console.log(err);
			} else if(result.length){
				console.log('Document found');
				res = result;
			} else {
				console.log('No document found');
			}
			db.close();
	});
}

module.exports.connect_to_db = connect_to_db;
module.exports.insert = insert;
module.exports.find = find;
module.exports.res = res;