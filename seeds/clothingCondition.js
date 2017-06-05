exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothingCondition').del()
    .then(function () {
      return knex('clothingCondition').insert([
        {clothingSizes: 'Good', conditionID: '1' },
      ]);
    });
};
