const getClothingStyles = (db) => {
  return db('clothingStyles')
    .select('*')
}

module.exports = {
  getClothingStyles,
}
