
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('membersDetails').del()
    .then(function () {
      return knex('greetings').insert([
        {loanID: '101', memberID: '234 567', clothingID: 'babyg_1', bookingStatus: 'OUT', returnByDate: '01/09/2017', actualReturnDate: '01/08/2017'},
      ]);
    });
};
