var express = require('express')
var router = express.Router()

var clothingDetailsDb = require('../db/clothingDetails')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  clothingDetailsDb.getClothingDetails(db)
    .then(clothingDetails => {
      res.json(clothingDetails)
    })
})

module.exports = router
