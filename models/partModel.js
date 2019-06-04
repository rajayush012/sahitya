const mongoose = require('mongoose');

const partSchema =new mongoose.Schema({
    novelid: {type: mongoose.Schema.Types.ObjectId,
            required: true, ref: 'Novels'},
    partcontent: {type:String, required:true},
    collabauthor: [{type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'Author'}]
});

module.exports = mongoose.model('Parts', partSchema);