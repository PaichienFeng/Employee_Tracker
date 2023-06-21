const mysql = require('mysql2/promise');
require('dotenv').config()


function connect(){

  return mysql.createConnection({

    database: 'employee_db',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // namedPlaceholders: true,
  })

}

module.exports = connect;