require('dotenv').config()
const User = require('../models/user')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const login = async (req,res) => {
    res.send(`Register User !!!`)
}

const Register = async (req, res) => {
    try{
    const {username , password ,email} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password , salt)
    const hashUser = {username , email , password : hashPass}
    console.log({username , password ,email})
    const user = await User.create(hashUser)
    const token = jwt.sign({name: user.username , id: user._id} , process.env.JWT_SECRET ,{expiresIn : '30d'})
    req.user = token
    console.log(token)
    res.status(200).json({user , token}) 
    }
    catch(error){
        console.log(error)
    }
    
}

module.exports = { login,Register }