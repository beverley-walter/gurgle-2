exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothingStatus').del()
    .then(function () {
      return knex('clothingStatus').insert([
        {clothingSizes: 'On Loan', sizeID: '1' },
      ]);
    });
};
