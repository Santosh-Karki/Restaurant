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
router.get('/', getReservation)

//getbyid route
router.get('/:id', getReservationId)

// post route
router.post('/', postReservation)

// delete route
router.delete('/:id', deleteReservation)


// update route
router.patch('/:id', updateReservation)

module.exports = router

