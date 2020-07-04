var express = require('express');
var router = express.Router();

let db = require('../models/db_calendar');

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
  db.query('SELECT * FROM yearly', (error, result)=>{
    if (error) throw error;
    // console.log(result);
    res.render('db', {db: result});
  })
});

router.post('/delete', function(req, res) {
  db.query(`DELETE FROM yearly WHERE id=${req.body.id}`,(error, result) => {
    if (error) throw error;
  })
  console.log(req.body.id)
  console.log(typeof(req.body.id))
  res.redirect('/db')
});

router.post('/insert', function(req, res) {
  console.log(req.body);
  db.query(`
    INSERT INTO yearly 
    (program, nth, recruit_s, recruit_e, compete_s, compete_e, learn_s, created)
    VALUES(?,?,?,?,?,?,?,NOW())`,
  [req.body.program, req.body.nth, req.body.recruit_s, req.body.recruit_e, req.body.compete_s,
    req.body.compete_e, req.body.learn_s],
    function(error, result){
      if(error){
        throw error;
      }
      res.redirect('/db');
    }
  )
})

router.post('/edit', function(req,res) {
  db.query(`Select * FROM yearly WHERE id = ${req.body.id}`, (error,result) => {
    if (error) throw error;
    for (let key in result[0]) {
      if (typeof(result[0][key]) === 'object' && result[0][key]) {
        result[0][key] = formatDate(result[0][key])
      }
    }
    console.log(result[0]);
    res.render('yearly_edit',{param: result[0]});
  })
});

router.post('/edit_process', (req,res) => {
  console.log(res.body);
  db.query(`UPDATE yearly SET program=?, nth=?, recruit_s=?, recruit_e=?, compete_s=?, compete_e=?, learn_s=? WHERE id=${req.body.id}`,
    [req.body.program, req.body.nth, req.body.recruit_s, req.body.recruit_e, req.body.compete_s, req.body.compete_e, req.body.learn_s],
    (error,result) => {
      if (error) throw error;
    });
  res.redirect('/db')
})
module.exports = router;
