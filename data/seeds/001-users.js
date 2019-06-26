
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('users')
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name:'Ashanti', username:'user', password:'password',email:'someone@email.com'},
        {name:'Awiti', username:'username', password:'password',email:'someone@email.com'},
        {name:'Afua', username:'usern', password:'password', email:'someone@email.com'},
      ]);
   
};
