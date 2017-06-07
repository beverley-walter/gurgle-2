
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members_list').del()
    .then(function () {
      return knex('members_list').insert([
        {member_id: 1, member_name: 'Bev Walter', member_address: '22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', member_phone: '0211 322 187', member_email: 'bevwaltersemail@gmail.com', member_created: '01/07/2017', member_rating: 'Bronze'},
        {member_id: 2, member_name: 'Bren Murrell', member_address: 'C/O NV Interactive, Level 2, 18-22 Allen Street, Te Aro, Wellington', member_phone:, member_email: 'bren@moon.com', member_created: '01/07/2017', member_rating: 'Bronze'},
        {member_id: 3, member_name: 'Corry Walter', member_address:'22 Miromiro Road, Normandale, Lower Hutt, Wellington, 5010', member_phone:'021 182 0303', member_email:'corry.walter@xtra.co.nz', member_created: '01/07/2017', member_rating: 'Bronze'}
      ]);
    });
};
