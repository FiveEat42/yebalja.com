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

//밑에 yearlycalendar component JSON에 사용될 함수
//더미데이터가 배열속에 오브젝트안에 배열속에 오브젝트안에 배열안에 오브젝트들이 나오는 꼴이라서 반복됨
//현재 배열중 제일 마지마 length - 1번째 오브젝트의 키, 값이 현재 db에서 읽은 키, 값과 비교해서
//존재하지 않거나 다르면 새로운 키,값을 만들고 같을땐 건드리지 않는게 목표
//아래 함수는 키,값이 같은게 있는지 체크해주는 함수
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
        //제일 바깥 어레이속 마지막 오브젝트의 idName이 현재 v의 idName과 같은지 체크
        //없으면 새로운 오브젝트 생성, 있으면 패스
        if (!hasKey(outerArr, 'idName', v.idName)){
          let obj1 = {
            'idName' : v.idName,
            'title' : v.title,
            'gisuData' : [],
          };
          outerArr.push(obj1);
        }
        let middleArr = outerArr[outerArr.length - 1].gisuData;
        //제일 바깥 어레이속 마지막 오브젝트의 gisu와 현재 v의 gisu가 같은지 체크
        //없으면 새로운 오브젝트 생성, 있으면 패스
        if (!hasKey(middleArr,'gisu', v.gisu)){
          let obj2 = {
            'gisu' : v.gisu,
            'visible' : v.visible,
            'step' : [],
          }
          middleArr.push(obj2);
        }
        let innerArr = middleArr[middleArr.length - 1].step;
        //제일 바깥 어레이속 마지막 오브젝트의 step과 현재 v의 step이 같은지 체크
        //없으면 새로운 오브젝트 생성, 있으면 패스
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
