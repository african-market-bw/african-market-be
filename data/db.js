module.exports = {
  users: {
    find: findUsers,
    findById: findUserById,
    add: addUser,
    remove: removeUser,
    update: updateUser,
    clear: clearUsers,
  },
};

let _users = [
  {
    id: 1,
    name: 'Sepia',
    product:'Beans',
  },
  {
    id: 2,
    name: 'Kay',
    product:'Jewelery',
  },
  {
    id: 3,
    name: 'Kat',
    product:'Fresh Fruit',
  },
  {
    id: 4,
    name: 'Jay',
    product:'handmade dresses',
  },
  {
    id: 5,
    name: 'Jane',
    product:'cell phone cases',
  },
];
let nextId = 6;

function findUsers(filter) {
  const seconds = new Date().getSeconds();

  // make it fail when seconds are odd
  if (seconds % 2 === 1) {
    return Promise.reject({
      code: 500,
      message: 'Too late, try again!',
    });
  }

  // if you pass a filter callback it will filter the results
  // try calling db.users.find(h => h.name === 'api-2') from a route handler
  if (filter) {
    const users = _users.filter(filter);
    return Promise.resolve(users);
  } else {
    // when called without a filter it resolves to all the users
    return Promise.resolve(_users);
  }
}

function findUserById(id) {
  const userId = Number(id);
  if (userId) {
    const user = _users.find(u => u.id === userId);

    return Promise.resolve(user);
  } else {
    return Promise.reject({
      code: 400,
      message: 'Is that a trick? Please provide a number for the id',
    });
  }
}

function addUser(user) {
  if (user && user.name) {
    const newUser = {
      id: nextId++,
      ...user,
      createdAt: new Date().toISOString(),
    };

    _users.push(newUser);

    return Promise.resolve(newUser);
  } else {
    return Promise.reject({
      code: 400,
      message: 'Please provide a name for the User',
    });
  }
}

function removeUser(id) {
  const userId = Number(id);
  if (userId) {
    const user = _users.find(u => u.id === userId);
    _users = _users.filter(u => u.id !== userId);

    return Promise.resolve(user);
  } else {
    return Promise.reject({
      code: 500,
      message: 'That user is here to stay! cannot be removed',
    });
  }
}

function updateUser(id, changes) {
  const userId = Number(id);
  if (userId && changes && typeof changes === 'object' && changes.name) {
    if (changes.id) {
      return Promise.reject({
        code: 400,
        message: "Can't touch this! The id cannot be changed",
      });
    }

    let index = _users.findIndex(u => u.id === userId);
    if (index > -1) {
      _users[index] = { ..._users[index], ...changes };
      return Promise.resolve(_users[index]);
    } else {
      return Promise.resolve();
    }
  } else {
    return Promise.reject({
      code: 400,
      message:
        'Did you change your mind? Please provide a valid id and a set of changes that includes the name',
    });
  }
}

function clearUsers() {
  _users = [];
  nextId = 1;
}

  
  