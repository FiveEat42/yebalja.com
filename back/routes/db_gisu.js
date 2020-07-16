var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const secretObj = require('../config/jwt');

let db = require('../models/db_config');

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

router.get('/', function(req, res, next) {
  let token = req.cookies['admin'];
  if (token)
  {
    let decoded = jwt.verify(token, secretObj.secret);
    if(decoded.email == secretObj.adminAccount){
      console.log('관리자 계정입니다.');
      db.query('SELECT * FROM gisu_table', (error, result)=>{
        if (error) throw error;
        // console.log(result);
        res.render('db_gisu/db_gisu', {db: result});
      })
    }
    else{
      console.log('관리자 계정이 아닙니다.')
      res.redirect('/api/login');
    }
  }


});

router.post('/delete', function(req, res) {
  db.query(`DELETE FROM gisu_table WHERE gisu_id=${req.body.gisu_id}`,(error, result) => {
    if (error) throw error;
  })
  res.redirect('/api/admin/db/gisu');
});

router.post('/insert', function(req, res) {
  console.log(req.body);
  db.query(`
    INSERT INTO gisu_table 
    (program_id, gisu_title, gisu_recruit_start, gisu_recruit_end, gisu_compete_start, gisu_compete_end, gisu_learn_start)
    VALUES(?,?,?,?,?,?,?)`,
  [req.body.program_id, req.body.gisu_title, req.body.gisu_recruit_start, req.body.gisu_recruit_end, req.body.gisu_compete_start,
    req.body.gisu_compete_end, req.body.gisu_learn_start],
    function(error, result){
      if(error){
        throw error;
      }
      res.redirect('/api/admin/db/gisu');
    }
  )
})

router.post('/edit', function(req,res) {
  db.query(`Select * FROM gisu_table WHERE gisu_id = ${req.body.gisu_id}`, (error,result) => {
    if (error) throw error;
    for (let key in result[0]) {
      if (typeof(result[0][key]) === 'object' && result[0][key]) {
        result[0][key] = formatDate(result[0][key])
      }
    }
    // console.log(result[0]);
    res.render('db_gisu/db_gisu_edit',{param: result[0]});
  })
});

router.post('/edit_process', (req,res) => {
  for (let key in req.body){
    if (!req.body[key]) {
      req.body[key] = null;
    }
  }
  db.query(`UPDATE gisu_table SET program_id=?, gisu_title=?, gisu_start_date=?, gisu_end_date=?, gisu_recruit_start=?, gisu_recruit_end=?, gisu_compete_start=?, gisu_compete_end=?, gisu_learn_start=? WHERE gisu_id=${req.body.gisu_id}`,
    [req.body.program_id, req.body.gisu_title, req.body.gisu_start_date, req.body.gisu_end_date, req.body.gisu_recruit_start, req.body.gisu_recruit_end, req.body.gisu_compete_start, req.body.gisu_compete_end, req.body.gisu_learn_start],
    (error,result) => {
      if (error) throw error;
    });
  res.redirect('/api/admin/db/gisu')
})
module.exports = router;
