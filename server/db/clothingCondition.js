const getClothingCondition = (db) => {
  return db('clothingCondition')
    .select('*')
}

module.exports = {
  getClothingCondition,
}
