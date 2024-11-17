require('dotenv').config()
const connectDB = require('./db/connect')
const location = require('./models/location')
const jsonLocation = require('./location.json')

const PORT = process.env.PORT || 5000

const start = async () => {
    try{
    await connectDB(process.env.MONGO_URI)
    await location.deleteMany()
    await location.create(jsonLocation)
    console.log('Successfully Sent Data To DataBase !!!')
    }
    catch(error){
        console.log(error)
    }
}

start()