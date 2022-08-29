const mongoose = require('mongoose');

// auther schema
const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3,
        maxlength:40
    },
    age:{
        type: Number,
        minlength: 10,
        maxlength:100
    },

});
module.exports = new mongoose.model('Author', AuthorSchema);