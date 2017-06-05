
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('membersDetails').del()
    .then(function () {
      return knex('greetings').insert([
        {memberID: 1, memberName: 'Bev Walter', memberAddress: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', memberPhone: '0211 322 187', memberEmail: 'bevwaltersemail@gmail.com', memberCreated: '01/07/2017', memberRating: 'Bronze'},
        {memberID: 2, memberName: 'Bren Murrell', memberAddress: 'C/O NV Interactive, Level 2, 18-22 Allen Street, Te Aro, Wellington', memberPhone:, memberEmail: 'bren@moon.com', memberCreated: '01/07/2017', memberRating: 'Bronze'},
        {memberID: 3, memberName: 'Corry Walter', memberAddress:'22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', memberPhone:'021 182 0303', memberEmail:'corry.walter@xtra.co.nz', memberCreated: '01/07/2017', memberRating: 'Bronze'}
      ]);
    });
};
