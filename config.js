const { config } = require('dotenv');

require('dotenv').config();

module.exports = {
      app: {
        port: process.env.PORT || 3000,
          },
          
      mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'Andreasilva89.',
        database: process.env.MYSQL_DB || 'prados2dbv2',
        port: process.env.MYSQL_PORT || 3306

      },
}