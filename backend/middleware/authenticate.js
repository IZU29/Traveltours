const jwt = require('jsonwebtoken')

const authenticate = (req , res , next) => {
   try { 
       // const token = authHeader
       const token= req.cookies.accesstoken
    // console.log(token)
    // const Decoder =  jwt.verify(token, process.env.JWT_SECRET)
    // // const { user }  = req
    // req.user = {userId : Decoder.id  , userName: Decoder.name}
    console.log(token)
    next()
    // jwt.verify
    }
    catch(error){
        res.status(500).json({status : 'failed' , message : "There was an error somewhere !!!"})
    }
}

module.exports = authenticate