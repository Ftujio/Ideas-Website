var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	title: {type: String, required: true},
	name: {type: String, required: true}
});

module.exports = mongoose.model('Test', schema);