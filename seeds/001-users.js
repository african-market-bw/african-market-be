
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name:'Ashanti', username:'username', password:'password',email:'someone@email.com', product:'beans',description:'food', location:'South Africa',price:'$24.98'},
        {name:'Awiti', username:'username1', password:'password',email:'someone@email.com', product:'jewelry',description:'goods', location:'Kenya',price:'$25:00'},
        {name:'Afua', username:'username2', password:'password', email:'someone@email.com', product:'soaps',description:'goods', location:'Morocco',price:'$35.00'},
      ]);
    });
};
