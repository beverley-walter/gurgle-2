const getarticle = (db) => {
  return db('article')
    .select('*')
}

module.exports = {
  getarticle,
}
