const express = require('express')
const router = express.Router()
const venueCtrl = require('../controllers/venuesController')

router.get('/', venueCtrl.getAllVenues)
router.get('/:id', venueCtrl.getVenueById)
router.post('/', venueCtrl.createVenue)


module.exports = router