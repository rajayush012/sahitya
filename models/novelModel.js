const mongoose = require('mongoose');

const novelSchema =new mongoose.Schema({
    title: { type: String, required: true },
    idea: { type: String, required: true },
    genre: { type: String, required: true },
    status: {type:String, required: true},
    content: {type:String, required:true},
    mainauthor: {type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'Authors'},
    collabauthor: [{type: mongoose.Schema.Types.ObjectId, ref: 'Authors'}]
});

module.exports = mongoose.model('Novels', novelSchema);