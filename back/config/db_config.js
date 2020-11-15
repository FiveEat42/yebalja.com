const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASSWORD,
  timezone: '+09:00',
  database: 'yebalja_db2'
})
connection.connect((err)=>{
  if (err) throw err;
})

module.exports = connection;
