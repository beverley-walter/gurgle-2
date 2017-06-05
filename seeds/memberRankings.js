exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('membershipRankings').del()
    .then(function () {
      return knex('membershipRankings').insert([
        {membershipRanking: 'Bronze', rankingID: '1' },
      ]);
    });
};
