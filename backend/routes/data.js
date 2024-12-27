const Express =  require('express')
const router = Express.Router()
const {createReview} = require('../controllers/data')

router.route('/data').get(createReview)

module.exports = router