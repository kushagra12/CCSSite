var facebook = require('./facebook');
var User = require('../models/user');
var local = require('./local');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
       // console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
           console.log('deserializing user');
            done(err, user);
        });
    });

    local(passport);
    facebook(passport);

}
