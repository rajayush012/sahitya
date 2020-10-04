const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const authorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    name: String,
    password: String,
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
});

authorSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Author', authorSchema);