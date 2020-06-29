var express = require('express');
var router = express.Router();

let db = require('../models/db_calendar');


router.get('/', function(req, res, next) {
  db.query('SELECT * FROM yearly', (error, result)=>{
    if (error) throw error;
    console.log(result);
    res.render('db', {db: result});
  })
});

module.exports = router;
