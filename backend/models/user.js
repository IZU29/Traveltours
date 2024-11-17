const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email:{
    type: String,
    required:[true , 'Please Provide an e-mail']
    },
    password:{
    type: String,
    required:[true , 'Please a Password']
    },
    username:{
    type:String,
    required:[true , 'Please provide a Username']
    }
},{timestamps : true})

module.exports = mongoose.model('user' , UserSchema)