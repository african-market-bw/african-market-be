const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}






// module.exports = {
//   find,
//   findById,
//   add,
//   remove,
//   update,
//   findUsersDescription
// };

// function find() {
//   return db('users');
// }

// function findById(id) {
//   return db('users')
//     .where({ id })
//     .first();
// }

// async function add(user) {
//   const [id] = await db('users').insert(user);

//   return findById(id);
// }

// function remove(id) {
//   return db('users')
//     .where({ id })
//     .del();
// }

// function update(id, changes) {
//   return db('users')
//     .where({ id })
//     .update(changes, '*');
// }

// function findUsersDescription(userId) {
//   return db('description as d')
//     .join('users as u', 'd.user_id', 'u.id')
//     .select('u.id', 'u.text', 'd.sender', 'u.id as userId', 'u.name as user')
//     .where({ user_id: userId });
// }
