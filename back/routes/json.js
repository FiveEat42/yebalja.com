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
  db.query(`
    select json_object(
      'program', title,
      'link', link,
      'number_of_recruits', personnel,
      'edu_period', edu_period,
      'grant', benefit,
      'aptitude', badge_aptitude,
      'coding', badge_coding,
      'interview', badge_interview,
      'tryout', badge_tryout)
    from programs;`, (error, result) => {
      let arr = [];
      if (error) throw error;
      result.map((v) => {
        let parsed =JSON.parse(Object.values(v));
        console.log(parsed);
        if (parsed.link !== '/likelion'){
          arr.push(parsed);
        }
      })
    console.log(arr);
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
// router.get('/timelinelist', (req,res) => {
//   db.query(`select json_object(
//     substring(link, 2), json_array((
//       select group_concat(
//         json_object(
//           'edu', edu,
//           'name', name,
//           'title', title,
//           'description', description,
//           'startdate', start_date,
//           'enddate', end_date
//         )
//       )
//       from steps_timelines
//       inner join gisus on steps_timelines.gisus_id = gisus.id
//       inner join programs on programs.id = gisus.programs_id
//      ))
//     )
//     from programs;`, (error, result) => {
//       if (error) throw result;
//      result.map((v) => {
//        let each = JSON.parse(Object.values(v)[0])
//        console.log('hihi', JSON.parse(Object.values(each)[0][0]))
//      })
//      // result.map(v => {
//      //   console.log("----------------------\n", Object.values(v));
//      // })
//     // console.log(a);
//       // console.log(result)
//       res.json(result);
//   })
// })
router.get('/timelinelist', (req, res) => {
  db.query(`  select
    substring(link, 2) as 'program',
    edu,
    name,
     title,
     description,
    'startdate', start_date,
    'enddate', end_date
    from steps_timelines
      inner join gisus on steps_timelines.gisus_id = gisus.id
      inner join programs on programs.id = gisus.programs_id;`, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.json(result);
  })
})


module.exports = router;

