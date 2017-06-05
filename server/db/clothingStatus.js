const getClothingStatus = (db) => {
  return db('clothingStatus')
    .select('*')
}

module.exports = {
  getClothingStatus,
}
