const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const authorSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

authorSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Author', authorSchema);