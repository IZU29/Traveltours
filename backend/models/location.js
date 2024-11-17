const mongoose = require('mongoose')
const Locate =  new mongoose.Schema({
    name:{
        type: 'String',
        required: [true , 'Please Provide a Name']
    },
    locationImage:{
        type: 'String',
        required : [true , 'Please Provide an Image URL']
    },
    rating:{
        type: 'Number',
        required: [true , 'Please Provide a rating']
    },
    location:{
        type: 'String',
        required : [true , 'Please Provide a Location']
    },
    price:{
        type: 'Number',
        required : [true , 'Please Provide a Price']
    }
})

module.exports = mongoose.model('location' , Locate)