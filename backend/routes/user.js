const Express = require('express')
const router = Express.Router()
const {login , Register} = require('../controllers/user')

router.post('/login' , login)
router.post('/register',Register)

module.exports = router