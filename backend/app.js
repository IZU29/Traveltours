const express =  require('express')
const app = express()
const userRoute = require('./routes/user')
const locationRoute = require('./routes/location')
const dataRoute = require('./routes/data')
const connectDB = require('./db/connect')
const authentication = require('./middleware/authenticate')

require('dotenv').config()


app.use(express.json())
app.use('/api/user' , userRoute)
app.use('/api' , locationRoute)
app.use('/api/review' , authentication , dataRoute)

const port = process.env.PORT || 5000 
async function Start(){
    try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port , () => {
    console.log(`Server Is Listening on Port ${5000}`)
    })
}
catch(error){
    console.log(error)
}
}

Start()