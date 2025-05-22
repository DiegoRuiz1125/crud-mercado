const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

module.exports = connection;
