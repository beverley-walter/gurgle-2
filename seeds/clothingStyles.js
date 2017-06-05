exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothingStyles').del()
    .then(function () {
      return knex('clothingStyles').insert([
        {clothingStyles: 'Shorts', styleID: '1' },
      ]);
    });
};
