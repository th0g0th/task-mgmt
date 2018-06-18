var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    taskName: {
        type: String,
        require: true
    },
    createdTime: {
        type: Date,
        require: true,
        default: Date.now
    },
    status: {
        type: Boolean,
        require: true,
        default: false
    },

});

module.exports = mongoose.model('tasks', TaskSchema);