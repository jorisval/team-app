const mongoose = require('mongoose');

const postCommentSchema = mongoose.Schema({
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'PostUser', required: true},
    content: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PostComment', postCommentSchema);