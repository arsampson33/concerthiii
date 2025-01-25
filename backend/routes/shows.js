const express = require('express')
const router = express.Router()
const showCtrl = require("../controllers/showsController")


router.get('/', showCtrl.getShows)
router.get('/:id', showCtrl.getShowsById)
router.post('/', showCtrl.createShow)
router.patch('/:id', showCtrl.updateShow)
router.delete('/:id', showCtrl.deleteShow)


module.exports = router