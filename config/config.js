require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  },
  app: {
    port: process.env.APP_PORT
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  session: {
    secret: process.env.SESSION_SECRET
  },
  permissions: {
    getId: process.env.PERMISSION_GET,
    postId: process.env.PERMISSION_POST,
    putId: process.env.PERMISSION_PUT,
    deleteId: process.env.PERMISSION_DELETE
  }
}