const getMembersList = (db) => {
  return db('membersList')
    .select('*')
}

module.exports = {
  getMembersList
}
