const express = require('express')
const router = express.Router()
const {getAllLocation} = require('../controllers/location')

router.route('/').get(getAllLocation)

module.exports = router
