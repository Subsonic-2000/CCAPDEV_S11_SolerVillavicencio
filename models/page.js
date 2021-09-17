const mongoose = require('mongoose');

//page schema
const PageSchema = mongoose.Schema({
    title:{
        type: String,
        required:false
    },
    body:{type: String, required: true},

});

//lets you access this model outside
const Page = module.exports = mongoose.model('Page',PageSchema);