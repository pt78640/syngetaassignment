const mongoose = require('mongoose');
const BookSchema=new mongoose.Schema({
    title:String,
author:String,
 category:String,
 status:String,
 statusHistory:{type:Date},

});
const book=mongoose.model('book',BookSchema);
module.exports =book;