exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothingSizes').del()
    .then(function () {
      return knex('clothingSizes').insert([
        {clothingSizes: 'Premmy', sizeID: '1' },
      ]);
    });
};
