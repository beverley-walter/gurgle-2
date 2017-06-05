const getClothingBrands = (db) => {
  return db('clothingBrands')
    .select('*')
}

module.exports = {
  getClothingBrands,
}
