const db = require('../data/dbConfig');


module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('products');
}

function findById(id) {
  return db('products')
    .where({ id : id })
    .first();
}

function add(products) {
  return db('products')
      .insert(products)
      .then(([id]) => {
          return findById(id)
      })
}

function update() {
  return db('products')
      .where({id})
      .update(changes)
      .then(count => {
          if (count > 0) {
              return findById(id)
          } else {
              return null
          }
      });
}

function remove() {
  return db('products')
      .where(id)
      .del();
}





