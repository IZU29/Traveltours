const Express = require('express')
const router = Express.Router()

const {getAllUser} = require('../controllers/user')
const { authenticate } = require('../middleware/authenticate')

router.get('/' , getAllUser)

module.exports = router