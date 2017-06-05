var express = require('express')
var router = express.Router()

var clothingBrandsDb = require('../db/clothingBrands')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  clothingBrandsDb.getClothingBrands(db)
    .then(clothingDetails => {
      res.json(clothingDetails)
    })
})

module.exports = router
