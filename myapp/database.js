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
	});
	var element = collection.find(query);
	element.each(function(err, doc){
		if(err){
			console.log('each: ' + err);
		} else if(doc != null){
			out.push(doc);
		}
		if(callback){
			callback(out, c);
		}
	}, function(){
		client.close();
	});

}

module.exports.connect_to_db = connect_to_db;
module.exports.insert = insert;
module.exports.find = find;