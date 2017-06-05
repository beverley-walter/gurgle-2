const getMemberRanking = (db) => {
  return db('memberRanking')
    .select('*')
}

module.exports = {
  getMemberRanking,
}
