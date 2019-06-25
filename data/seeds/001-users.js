
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name:'Ashanti', username:'username', password:'password',email:'someone@email.com'},
        {name:'Awiti', username:'username1', password:'password',email:'someone@email.com'},
        {name:'Afua', username:'username2', password:'password', email:'someone@email.com'},
      ]);
    });
};
