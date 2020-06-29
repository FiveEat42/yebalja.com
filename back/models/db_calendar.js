const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '5Eatramenmoto!',
  database: 'yebalja'
})
connection.connect((err)=>{
  if (err) throw err;
})

module.exports = connection;
