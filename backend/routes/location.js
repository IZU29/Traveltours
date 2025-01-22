const express = require('express')
const router = express.Router()
const {getAllLocation , createLocation ,updateLocation ,getSinglelocation} = require('../controllers/location')

router.route('/').get(getAllLocation).post(createLocation)
router.route('/:id').put(updateLocation).get(getSinglelocation)


module.exports = router
