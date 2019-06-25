exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { product:'beans',description:'food', location:'South Africa',price:'$24.98'},
        { product:'jewelry',description:'goods', location:'Kenya',price:'$25:00'},
        { product:'soaps',description:'goods', location:'Morocco',price:'$35.00'},
      ]);
    });
};

