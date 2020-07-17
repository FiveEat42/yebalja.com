const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'yebalja_db'
})
connection.connect((err)=>{
  if (err) throw err;
})

module.exports = connection;
