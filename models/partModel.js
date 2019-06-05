const mongoose = require('mongoose');

const partSchema =new mongoose.Schema({
    novelid: {type: mongoose.Schema.Types.ObjectId,
            required: true, ref: 'Novels'},
    title: {type: String, required: true},
    partcontent: {type:String, required:true},
    comment:{type:String},
    status: {type:String},
    collabauthor: {
        id: {type: mongoose.Schema.Types.ObjectId,
                required: true, ref: 'Author'},
        name: {type: String, required: true, ref:'Author'}
    }
})

module.exports = mongoose.model('Part',partSchema);



