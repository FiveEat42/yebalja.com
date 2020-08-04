var express = require('express');
var router = express.Router();

let db = require('../config/db_config');


router.get('/gisu', function(req, res, next) {
  db.query('SELECT * FROM gisu_table', (error, result)=>{
    if (error) throw error;
    console.log(result);
    res.json(result);
  })
});

router.get('/program', function(req, res, next){
  db.query('SELECT * FROM program_table', (error, result)=>{
    if (error) throw error;
    res.json(result);
  })
})

router.get('/table', (req, res) => {
  db.query(`select
'program', title,
  'link', link,
  'number_of_recruits', personnel,
  'edu_period', edu_period,
  'grant', benefit,
  'aptitude', badge_aptitude,
  'coding', badge_coding,
  'interview', badge_interview,
  'tryout', badge_tryout
from programs;`, (error, result) => {
    let arr = [];
    if (error) throw error;
    // console.log(result);
    result.map((v) => {
      if (v.link != '/likelion'){
        arr.push(v);
      }
    })
    console.log(arr)
    res.json(arr);
  })
});

module.exports = router;

