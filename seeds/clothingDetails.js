
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('membersDetails').del()
    .then(function () {
      return knex('membersDetials').insert([
        {clothingID: 'babyg_1', sizeID: '3-6 months', styleID: 'Baby Grow', conditionID: 'Good', statusID: 'OUT', clothingDescription: 'Very cute baby-grow, in great condition - slight pilling on rear. Fit comes up slightly small. Suitable as a layer or for warmer weather.', photo_1: '01', photo_2: '02', },
      ]);
    });
};
