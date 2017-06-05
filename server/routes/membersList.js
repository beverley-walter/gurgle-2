var express = require('express')
var router = express.Router()

var membersListDb = require('../db/membersList')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  membersListDb.getMembersList(db)
    .then(membersList => {
      res.json(membersList)
    })
})

module.exports = router
