const getClothingSizes = (db) => {
  return db('clothingSizes')
    .select('*')
}

module.exports = {
  getClothingSizes,
}
