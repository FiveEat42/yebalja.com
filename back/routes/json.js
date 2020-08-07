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
        //likelion은 테이블에 안쓰이므로 삭제
        if (parsed.link !== '/likelion'){
          arr.push(parsed);
        }
      })
    console.log(arr);
      res.json(arr);
  })
});

router.get('/timeline', (req, res) => {
  db.query(`
    select substring(link, 2), json_array((
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
      // console.log('obj',obj);
      res.json(obj);
  })
})

router.get('/timelinelist', (req, res) => {
  db.query(`  select
    substring(link, 2) as 'program',
    edu,
    name,
    description,
    start_date as 'startdate',
    end_date as 'enddate'
    from steps_timelines
    inner join gisus on steps_timelines.gisus_id = gisus.id
    inner join programs on programs.id = gisus.programs_id;`, (error, result) => {
      if (error) throw error;
      let obj = {};
      result.map(v => {
        //각각의 프로그램이름들('ftseoul'등)이 obj에 없으면 obj['ftseoul']에 빈배열[]을 만듬
        if (!(v.program in obj)){
          obj[v.program] = [];
        }
        //만들어진 빈배열에 오브젝트 push
        obj[v.program].push(v);
        //'ftseoul'같은 프로그램 이름은 obj의 키값으로 적어줬기때문에 v에 있는 'ftseoul'은 삭제
        delete v['program']
      })
      // console.log(obj);
      res.json(obj);
  })
})

const hasKey = (arr, key, value) => {
  let len = arr.length;
  if (!arr[len - 1] || arr[len - 1][key] != value){
    return false;
  } else {
    return true;
  }
}

router.get('/yearlycalendar', (req, res) => {
  db.query(`select substring(link, 2) as 'idName', programs.title as title, gisus.gisu, visible, steps_calendars.title as stepTitle, detail, start_date as startDate, end_date as endDate from steps_calendars inner join gisus on steps_calendars.gisus_id = gisus.id inner join programs on gisus.programs_id = programs.id;`,
    (error, result) => {
      if (error) throw error;
      let outerArr = [];
      result.map(v => {
        if (!hasKey(outerArr, 'idName', v.idName)){
          let obj1 = {
            'idName' : v.idName,
            'title' : v.title,
            'gisuData' : [],
          };
          outerArr.push(obj1);
        }
        let middleArr = outerArr[outerArr.length - 1].gisuData;
        if (!hasKey(middleArr,'gisu', v.gisu)){
          let obj2 = {
            'gisu' : v.gisu,
            'visible' : v.visible,
            'step' : [],
          }
          middleArr.push(obj2);
        }
        let innerArr = middleArr[middleArr.length - 1].step;
        if (!hasKey(innerArr, 'title', v.stepTitle)){
          let obj3 = {
            'title': v.stepTitle,
            'period': v.detail,
            'startDate': v.startDate,
            'endDate': v.endDate,
          }
          innerArr.push(obj3);
        }
      })
      res.send(outerArr);
  })
})

module.exports = router;
