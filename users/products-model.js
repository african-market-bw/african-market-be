const db = require('../data/dbConfig');



module.exports = {
  find,
  findById,
  userById,
  add,
  remove,
  update,
  findProuctDescription
};

function find() {
  return db('products');
}

function findById(id) {
  return db('products')
    .where({ id })
    .first();
}

function userById(user_id) {
  return db('products')
    .where({ user_id });
}

function add(product) {
  return db('products')
    .insert(product, 'id')
    .then(ids => {
      return db('products')
       .where({ id: ids[0 ]})
       .first();
    })
}
  

function remove(id) {
  return db('products')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('products')
    .where({ id })
    .update(changes, '*');
}

function findProuctDescription(user_Id) {
  return db('products')
    .join('products as p', 'p.user_id', 'p.id')
    .select('d.id', 'd.text', 'd.sender', 'p.id as userId', 'p.name as products')
    .where({ product_id: ProductsId });
}
