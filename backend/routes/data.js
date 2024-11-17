const Express =  require('express')
const router = Express.Router()
const {createReview} = require('../controllers/data')

router.route('/create').post(createReview)

module.exports = router