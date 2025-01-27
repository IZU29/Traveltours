const User = require('../models/user')

const getAllUser = async (req , res) => {
    const user = await User.find({})
    res.status(200).json({user})
}

module.exports = {getAllUser}