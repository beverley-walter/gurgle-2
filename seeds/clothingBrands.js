exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothingBrands').del()
    .then(function () {
      return knex('clothingBrands').insert([
        {clothingBrand: 'Baby Factory', brandID: '1' },
      ]);
    });
};
