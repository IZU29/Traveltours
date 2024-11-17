const Location = require('../models/location')

const getAllLocation = async(req , res) => {
    try{
    const locatePlace = await Location.find({})
    res.status(200).json(locatePlace)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getAllLocation
}