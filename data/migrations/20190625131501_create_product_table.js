exports.up = function(knex) {
    return knex.schema.createTable('products', products=> {
      products.increments();
      products.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');


      products
        .string('name', 128)
        .notNullable();
        

      products.float('price');
      products.string('location');
      products.string('description');
      products.string('pictureURL');
  });
};

      
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
  };
  


