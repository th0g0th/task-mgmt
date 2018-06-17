var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose, {
    usernameUnique: false,
    findByUsername: (model, queryParameters) => {
        return model.findOne(queryParameters);
    }
});

module.exports = mongoose.model('users', userSchema, 'users');