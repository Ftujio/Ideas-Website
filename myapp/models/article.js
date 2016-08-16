var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	author_id: {type: String, required: true},
	date: {type: Date, require: true}
});

module.exports = mongoose.model('Article', articleSchema);