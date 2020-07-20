var express = require('express');
var router = express.Router();
var url = require('url');
let db = require('../config/db_config');

const jwt = require('jsonwebtoken');
const secretObj = require('../config/jwt');

//title, benefit, content, summary_content, language

router.get('/', function(req, res, next) {
  let token = req.cookies['admin'];
  if (token)
  {
    let decoded = jwt.verify(token, secretObj.secret);
    if(decoded.email == secretObj.adminAccount){
      console.log('관리자 계정입니다.');
      db.query('SELECT * FROM program_table', (error, result)=>{
        if (error) throw error;
        // console.log(result);
        res.render('db_program/db_program', {db: result});
      })
    }
    else{
      console.log('관리자 계정이 아닙니다.')
      res.redirect('/api/login');
    }
  }
    // db.query('SELECT * FROM program_table', (error, result)=>{
    //   if (error) throw error;
    //   // console.log(result);
    //   res.render('db_program/db_program', {db: result});
    // })
  });
  
router.post('/insert', function(req, res, next)
{
    let body = req.body;
    let sql = 'insert into program_table(program_title, program_benefit, program_content, program_summary_content, program_language) values (?, ?, ?, ?, ?)';
    db.query(sql, [body.program_title, body.program_benefit, 
        body.program_content, body.program_summary_content,
        body.program_language],
        function(error, result)
        {
            if(error)
                throw (error);
        res.redirect('/api/admin/db/program');
    }
    )
});

router.post('/delete', function(req, res, next){
  let body = req.body;

  let sql = `delete from program_table where program_id = ${body.program_id}`;
  db.query(sql, function(error ,result){
    if (error)
      throw (error);
      res.redirect('/api/admin/db/program');
  })
})
router.get('/update', function(req, res, next){
  let updateId = url.parse(req.url, true).query.program_id;
  console.log("updateId = "+updateId);
  res.render('db_program/db_program_update',{updateId : updateId});
})
router.post('/update', function(req, res, next){
  let body = req.body;
  let sql = `update program_table SET program_title = ?, program_content = ?, program_summary_content = ?, program_benefit = ?, program_language = ? where program_id = ${body.program_id}`;
  db.query(sql,[body.program_title, body.program_content, body.program_summary_content, body.program_benefit, body.program_language],
    function(error, result){
      if (error)
        throw (error);
    });
    res.redirect('/api/admin/db/program');
})

module.exports = router;