
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('users')
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name:'Ashanti', username:'password', password:'password',email:'someone2@email.com'},
        {name:'Awiti', username:'username', password:'password',email:'someone1@email.com'},
        {name:'Afua', username:'user', password:'password', email:'someone@gemail.com'},
      ]);
   
};

