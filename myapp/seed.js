var Test = require('./models/test');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/ideaswebsite');

var tests = [
	new Test({
		title: 'A title',
		name: 'Ftujio'
	}),
	new Test({
		title: 'B title',
		name: 'Sght'
	})
]

for(var i = 0; i < tests.length; i++){
	tests[i].save();
}

mongoose.disconnect();