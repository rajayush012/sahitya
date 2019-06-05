const mongoose = require('mongoose');

const novelSchema =new mongoose.Schema({
    title: { type: String, required: true },
    idea: { type: String, required: true },
    genre: { type: String, required: true },
    status: {type:String, required: true},
    contents: [{
        content:{type:String, required:true},
        timestamp:{type:Date, required:true}
    }],
    mainauthor: {
        id: {type: mongoose.Schema.Types.ObjectId,
            required: true, ref: 'Authors'},
        name: {type: String,
            required: true, ref: 'Authors'}
    },
    collabauthor: [{
        id: {type: mongoose.Schema.Types.ObjectId,
            required: true, ref: 'Authors'},
        name: {type: String,
            required: true, ref: 'Authors'}
    }]
});

module.exports = mongoose.model('Novels', novelSchema);