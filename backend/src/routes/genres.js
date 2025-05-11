const express = require('express')
const router = express.Router()
const genreCtrl = require("../controllers/genresController")


router.get('/', genreCtrl.getGenres)



module.exports = router