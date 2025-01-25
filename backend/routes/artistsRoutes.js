const express = require("express");
const router = express.Router();
const artistCtrl = require("../controllers/artistsController");

router.get("/", artistCtrl.getArtists);
router.post("/", artistCtrl.createArtist);
router.delete("/:id", artistCtrl.deleteArtist)
router.patch("/:id", artistCtrl.updateArtist)

module.exports = router;
