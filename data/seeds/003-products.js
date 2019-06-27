exports.seed = function(knex, Promise) {
 
      return knex('products').insert([
        { user_id: 1 , name:'beans',description:'food', location:'South Africa',price:'24.98',pictureURL:'www.yes.com'},
        { user_id: 2, name:'jewelry',description:'goods', location:'Kenya',price:'25.00' ,pictureURL:'www.yes.com'},
        { user_id: 3, name:'soaps',description:'goods', location:'Morocco',price:'35.00' ,pictureURL:'www.yes.com'}
      ]);
   
};

