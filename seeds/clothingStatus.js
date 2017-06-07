exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_status').del()
    .then(function () {
      return knex('clothing_status').insert([
         {size_id: '1', clothing_status: 'In'},
         {size_id: '2', clothing_status: 'Out'},
         {size_id: '3', clothing_status: 'Admin'}
      ]);
    });
};
