// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_test'
    }
  },
  migrations: {
    tableName: 'migrations',
    directory: 'db',
  }
};
