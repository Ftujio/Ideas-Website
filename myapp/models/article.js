var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function validator(v){
	return v.length != null;
}

var articleSchema = new Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	author: {type: String, required: true},
	author_id: {type: String, required: true},
	date: {type: Date, required: true},
	score: {type: Number},
	status: String,
	comments: [
		{
			text: String,
			author: {type: String, required: true, validate: [validator, 'Missing author']},
			date: Date,
			likes: Number
		}
	]
});

module.exports = mongoose.model('Article', articleSchema);