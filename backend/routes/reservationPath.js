const express = require('express')
const router = express.Router()
const{ postReservation,
  getReservation,
  getReservationId,
  deleteReservation,
updateReservation } = require('../controllers/reservationController');
const requireAuth = require('../middleware/requireAuth')



router.use(requireAuth)

//get route
router.get('https://restaurant-o7bo.onrender.com/', getReservation)

//getbyid route
router.get('https://restaurant-o7bo.onrender.com/:id', getReservationId)

// post route
router.post('https://restaurant-o7bo.onrender.com/', postReservation)

// delete route
router.delete('https://restaurant-o7bo.onrender.com/:id', deleteReservation)


// update route
router.patch('https://restaurant-o7bo.onrender.com/:id', updateReservation)

module.exports = router

