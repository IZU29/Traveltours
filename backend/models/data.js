const mongoose =  require('mongoose')
const dataSchema = new mongoose.Schema({
    createdBy:{
        type : 'String',
        required: [true , 'Please Provide Creator ID']
    },
    // review:{
    //     type: 'String',
    //     required: [true , 'Please Provide review']
    // },
    name:{
        type: 'String',
        required: [true , 'Please Provide a Name']
    }
} , {timestamps : true})

module.exports = new mongoose.model('data' , dataSchema)