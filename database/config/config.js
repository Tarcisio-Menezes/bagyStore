require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'bagyStore',
    host: process.env.HOST,
    dialect: 'sqlite',
    databaseUrl: process.env.DATABASE_URL,
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'bagyStore',
    host: process.env.HOST,
    dialect: 'sqlite',
    databaseUrl: process.env.DATABASE_URL,
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'bagyStore',
    host: process.env.HOST,
    dialect: 'sqlite',
    databaseUrl: process.env.DATABASE_URL,
  },
};
