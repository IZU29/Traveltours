const Location = require('../models/location')

const getAllLocation = async(req , res) => {
    try{
    const locatePlace = await Location.find({})
    res.status(200).json({msg : "created Successfully", data : locatePlace})
    }
    catch(error){
        console.log(error)
    }
}
const createLocation = async (req , res) => {
   try{ 
const {
    title,
    city,
    address,
    distance,
    photo,
    desc,
    price,
    maxGroupSize,
    reviews,
    featured
} = req.body
    const locationData = { title,city,address,distance,photo,desc,price,maxGroupSize,reviews,featured}
    const location = await Location.create(locationData)
    res.status(200).json({msg : "created Successfully", data : location})
}
catch(error){
    res.status(404).json({msg : "There was error somewhere", error : error})
}
}
const updateLocation = async (req , res) => {
    try{
    const {id} = req.params
    const locationData = await Location.findByIdAndUpdate(id , {$set : req.body} ,{new : true})
    res.status(200).json({msg: "successful" , data  : locationData})
}
    catch(error){
    console.log(error)
    }
}
const deleteLocation = async (req , res) => {
    try{
    const {id} = req.params
    const locationData = await Location.findByIdAndDelete(id)
    res.status(200).json({msg: "successful" , data  : locationData})
}
    catch(error){
    console.log(error)
    }
}

const getSinglelocation = async (req ,res) => {
    try {
    const {id} = req.params
    const location = await Location.find({ _id : id })
    res.status(200).json({msg: "Successful" , data : location})
    }
    catch(error){
    res.status(500).json({msg : "Failed" , error : error})
    }
}
module.exports = {
    getAllLocation , createLocation , updateLocation , getSinglelocation , deleteLocation
}