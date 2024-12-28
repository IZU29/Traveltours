require('dotenv').config()
const cors = require('cors');

const express =  require('express')
const app = express()
const userRoute = require('./routes/user')
const locationRoute = require('./routes/location')
const dataRoute = require('./routes/data')
const connectDB = require('./db/connect')
const authentication = require('./middleware/authenticate')



app.use(express.json())
app.use(cors());

app.use('/api/user' , userRoute)
app.use('/api/location' , locationRoute)
app.use('/api' , authentication , dataRoute)

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