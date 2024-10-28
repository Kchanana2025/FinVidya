const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    literacyQuizScore:{
        type:Number,
        required:true
    },
    courseType:{
        type:String,
        required:true
    }
})


const User = mongoose.model('User', UserSchema);

module.exports = User