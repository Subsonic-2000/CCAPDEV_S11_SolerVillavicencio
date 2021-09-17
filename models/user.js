const mongoose = require('mongoose');

//user schema
const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    profile_pic:{
        data: Buffer,
        contentType: String,
        required:false
    },
    /*
    favourites:{type: [Schema.Types.Novel]},
    written_books:{type: [Schema.Types.Novel]}
    */
});

//lets you access this model outside
const User = module.exports = mongoose.model('User',UserSchema);