exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.timestamps(true, true);
  
        tbl.unique('name');
      })

      .createTable('username', tbl => {
          tbl.string('username').notNullable();
          tbl.unique('username');
      })

      .createTable('password', tbl => {
        tbl.string('password').notNullable();
        tbl.unique('password');
    })

    .createTable('location', tbl => {
        tbl.string('location');
        
    })

    .createTable('price', tbl => {
        tbl.string('price');
        
    })


      .createTable('product description', tbl => {
        tbl.increments();
        tbl
          .string('sender')
          .index();
        tbl.text('text')
        tbl.timestamps(true, true);
  
        tbl
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  
