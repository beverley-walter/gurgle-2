const getLoanDetails = (db) => {
  return db('loanDetails')
    .select('*')
}

module.exports = {
  getLoanDetails
}
