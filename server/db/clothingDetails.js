const getClothingDetails = (db) => {
  return db('clothingDetails')
    .select('*')
}

module.exports = {
  getClothingDetails,
}
