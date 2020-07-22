const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: '34.64.143.77',
  port: 3306,
  user: 'secho',
  password: process.env.DB_PASSWORD,
  database: 'yebalja_db'
})
connection.connect((err)=>{
  if (err) throw err;
})

module.exports = connection;
