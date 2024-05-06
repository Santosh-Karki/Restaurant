const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post(' https://restaurant-o7bo.onrender.com/login', loginUser)

// signup route
router.post('https://restaurant-o7bo.onrender.com/signup', signupUser)

module.exports = router