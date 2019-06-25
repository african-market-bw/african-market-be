exports.up = function(knex) {
    return knex.schema.createTable('products', products=> {
      products.increments();
      
   
      products.string('product');
      products.float('price');
      products.string('location');
      products.string('description');
  });
};

      
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
  };
  


