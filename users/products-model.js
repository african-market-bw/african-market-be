const db = require('../data/dbConfig');


module.exports = {
  find,
  findById,
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

async function add(produt) {
  const [id] = await db('products').insert(product);

  return findById(id);
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
