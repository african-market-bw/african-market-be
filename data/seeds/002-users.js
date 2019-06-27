
exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {name:'Ashanti', username:'password', password:'password',email:'someone2@email.com'},
        {name:'Awiti', username:'username', password:'password',email:'someone1@email.com'},
        {name:'Afua', username:'user', password:'password', email:'someone@gemail.com'},
      ]);
   
};

