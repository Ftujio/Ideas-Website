var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user);
	});
});

passport.use('local.signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, function(req, email, password, done){
	req.checkBody('name', 'Name must be at least 3 characters long').isLength({min: 3});
	req.checkBody('email', 'Invalid email').isEmail();
	req.checkBody('password', 'Password must be at least 4 characters long').notEmpty().isLength({min: 4});
	
	var errors = req.validationErrors();
	console.log('Register: Request for resgistration');

	if(errors){
		var messages = [];

		errors.forEach(function(error){
			messages.push(error.msg);
		});

		console.log('Errors in register');

		return done(null, false, req.flash('error', messages));
	}

	User.findOne({'email': email}, function(err, user){
		if(err){ // Query error
			return done(err);
		}
		if(user){ // User already exists
			console.log('Register: User tried to submit existing email');
			return done(null, false, {message: 'Email is already in use.'});
		}

		console.log('Register: User submited valid info');

		var newUser = new User();
		newUser.email = email;
		newUser.password = newUser.encryptPassword(password);
		newUser.name = req.body.name;
		newUser.save(function(err, result){
			if(err){
				return done(err);
			}
			return done(null, newUser);
		});
	});
}));

passport.use('local.signin', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, function(req, email, password, done){
	req.checkBody('email', 'Invalid email').isEmail();
	req.checkBody('password', 'Password must be at least 4 characters long').notEmpty();
	
	var errors = req.validationErrors();
	console.log('Login: Request for login');

	if(errors){
		var messages = [];

		errors.forEach(function(error){
			messages.push(error.msg);
		});

		console.log('Login: User submited invalid information');

		return done(null, false, req.flash('error', messages));
	}

	User.findOne({'email': email}, function(err, user){
		if(err){ // Query error
			return done(err);
		}
		
		if(!user){
			return done(null, false, {message: 'No user found'});
		}

		if(!user.validPassword(password)){
			return done(null, false, {message: 'Wrong password'});
		}

		return done(null, user);
	});
}));