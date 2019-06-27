
const dummyPgConfig = {
  // placeholder since there is no pg locally
  host: '',
  database: '',
  user: '',
  password: ''
};

const prodDbConnection = process.env.DATABASE_URL || dummyPgConfig;

module.exports = {
  

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/1newdb.db3',
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client:'sqlite3',
    connection: {
      filename: './data/testdb.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: prodDbConnection,
    migrations: {
      directory: './data/migrations',
      
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
