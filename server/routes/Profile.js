var express = require('express')
var router = express.Router()

var loanDetailsDb = require('../db/loanDetails')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  loanDetailsDb.getloanDetails(db)
    .then(loanDetails => {
      res.json(loanDetails)
    })
})

module.exports = router


//part of member profile view and admin view
