require('dotenv').config();
const { DATABASE_URL, PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

const connection = DATABASE_URL || {
  host: PGHOST || '127.0.0.1',
  user: PGUSER || 'postgres',
  password: PGPASSWORD || undefined,
  database: PGDATABASE || 'pluhos',
  port: PGPORT ? Number(PGPORT) : 5432
};

module.exports = {
  development: {
    client: 'pg',
    connection,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
