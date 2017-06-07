var express = require('express')
var router = express.Router()

var getcatalogueDb = require('../db/catalogue')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  getcatalogueDb.getcatalogue(db)
    .then(catalogue => {
      res.json(catalogue)
    })
})

module.exports = router


//search option
