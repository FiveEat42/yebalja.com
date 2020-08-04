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
      result.map((v) => {
        if (v.link != '/likelion'){
          arr.push(v);
        }
      })
      res.json(arr);
  })
});
router.get('/timeline', (req, res) => {
  db.query(`select substring(link, 2), json_array((
    json_object(
            'heading', heading,
            'subheading', subheading
        )
    ))
from programs;`, (error, result) => {
    if (error) throw result;
    let obj = {};
    result.map(v => {
      let dbString = Object.values(v)
      let key = dbString[0];
      let value = JSON.parse(dbString[1]);
      obj[key] = value;
    })
    console.log('obj',obj);
    res.json(obj);
  })
})

module.exports = router;

