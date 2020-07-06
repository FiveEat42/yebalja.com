var express = require('express');
var router = express.Router();

let db = require('../models/db_config');


router.get('/', function(req, res, next) {
  db.query('SELECT * FROM gisu_table', (error, result)=>{
    if (error) throw error;
    console.log(result);
    res.json(result);
  })
});

module.exports = router;
