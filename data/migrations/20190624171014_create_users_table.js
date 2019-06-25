exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
      users
        .string('username', 280)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
      users.string('name').notNullable();
      users.string('email').notNullable();
  });
};

      
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  
