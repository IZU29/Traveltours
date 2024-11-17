const Data =  require('../models/data')

const createReview = async (req , res) => {
    const {userName , userId} = req.user
    const { review }  = req.body
    // console.log(req.user)
    const reviewData = {name : userName , createdBy : userId , review: review}
    // console.log(reviewData)
    const userData = await Data.create(reviewData)
    res.status(200).json({userData})
}

module.exports = {
    createReview
}