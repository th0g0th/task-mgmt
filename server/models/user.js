var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    role: {
        type: String,
        unique: String,
        default: 'OPERATOR'
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameUnique: false,
    selectFields: 'username role',
    findByUsername: (model, queryParameters) => {
        return model.findOne(queryParameters);
    }
});

module.exports = mongoose.model('users', userSchema, 'users');