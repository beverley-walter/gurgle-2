var express = require('express')
var router = express.Router()

var articleDb = require('../db/article')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  articleDb.getarticle(db)
    .then(article => {
      res.json(article)
    })
})

module.exports = router


// single item clothing view
