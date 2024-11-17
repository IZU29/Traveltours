const jwt = require('jsonwebtoken')

const authenticate = (req , res , next) => {
   try { 
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    console.log(token)
    const Decoder =  jwt.verify(token, process.env.JWT_SECRET)
    // const { user }  = req
    req.user = {userId : Decoder.id  , userName: Decoder.name}
    next()
    // jwt.verify
    }
    catch(error){
        console.log(error)
    }
}

module.exports = authenticate