const getClothingDetails = (db) => {
  return db('clothingDetails')
    .select('*')
}

const getLoanDetails = (db) => {
  return db('loanDetails')
    .select('*')
}

const getMembersList = (db) => {
  return db('membersList')
    .select('*')
}

module.exports = {
  getClothingDetails,
  getLoanDetails,
  getMembersList
}
