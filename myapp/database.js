var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/ideaswebsite';
var client;

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
		return null;
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
		return null;
	}
	var out = [];
	var c;

	var collection = client.collection(collection);
	collection.count(function(err, count){
		c = count;
		console.log(c);
	});
	var element = collection.find(query);
	element.toArray(function (err, result){
		if(err){
			console.log('toArray: ' + err);
		} else if(result.length){
			if(callback){
				callback(result, c);
			}
		} else {
			console.log('No documents found');
		}
		client.close();
	});
}

module.exports.connect_to_db = connect_to_db;
module.exports.insert = insert;
module.exports.find = find;