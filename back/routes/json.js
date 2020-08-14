var express = require('express');
var router = express.Router();
var cors = require('cors');
let db = require('../config/db_config');


router.get('/gisu', function(req, res, next) {
  db.query('SELECT * FROM gisu_table', (error, result)=>{
    if (error) throw error;
    console.log(result);
    res.json(result);
  })
});

router.get('/program', function(req, res, next){
  db.query('SELECT * FROM programs', (error, result)=>{
    if (error) throw error;
    res.json(result);
  })
})

router.get('/table', (req, res) => {
  db.query(`select json_object('program', title, 'link', link, 'number_of_recruits', personnel, 'edu_period', edu_period, 'grant', benefit, 'aptitude', badge_aptitude, 'coding', badge_coding, 'interview', badge_interview, 'tryout', badge_tryout)  from programs;`,
    (error, result) => {
      let arr = [];
      if (error) throw error;
      result.map((v) => {
        let parsed =JSON.parse(Object.values(v));
        //likelion은 테이블에 안쓰이므로 삭제
        if (parsed.link !== '/likelion'){
          arr.push(parsed);
        }
      })
    // console.log(arr);
    res.json(arr);
  })
});

router.get('/timeline', (req, res) => {
  db.query(`
    select substring(link, 2), json_array((json_object('heading', heading, 'subheading', subheading))) from programs;`,
    (error, result) => {
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
  db.query(`select substring(link, 2) as 'program', edu, name, description, start_date as 'startdate', end_date as 'enddate' from steps_timelines inner join gisus on steps_timelines.gisus_id = gisus.id inner join programs on programs.id = gisus.programs_id;`,
    (error, result) => {
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

router.get('/yearlycalendar', cors('http://localhost:3000'), (req, res) => {
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
        // console.log(v);
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
          if (!(v.visible >= 2 && v.stepTitle == '지원'))
           innerArr.push(obj3);
        }
      })
      // console.log(outerArr);
      res.send(outerArr);
  })
})

//cors에 경로를 명시해야함, 에러발생
router.get('/faq', cors('http://localhost:3000'), (req,res) => {
  db.query(
    "select replace(programs.link, '/', '') as program,  categories.title as category,  categories.eventkey as eventKey,  subcategories.title as title,  subcategories.link as href, qnas.q , qnas.a from programs  inner join categories on programs.id = categories.programs_id inner join subcategories on categories.id = subcategories.categories_id  inner join qnas on qnas.subcategories_id = subcategories.id",
    (error, result) => {
      if (error) throw error;
      let obj1 = {}
      result.map(v => {
        //obj1(제일바깥 obj)에 program키가 있는지 체크
        if (!obj1[v.program]){
          obj1[v.program] = [];
        }
        let arr1 = obj1[v.program]
        if (!hasKey(arr1, 'category', v.category)){
          let obj2 = {
            'category': v.category,
            'eventKey': v.eventKey,
            'subCategory': [],
          }
          arr1.push(obj2);
        }
        let arr2 = arr1[arr1.length - 1].subCategory;
        if (!hasKey(arr2, 'title', v.title)){
          let obj3 = {
            'title': v.title,
            'href': v.href,
            'qna': []
          }
          arr2.push(obj3);
        }
        let arr3 = arr2[arr2.length - 1].qna;
        if (!hasKey(arr3, 'q', v.q)){
          let obj4 = {
            'q': v.q,
            'a': v.a,
          }
          arr3.push(obj4);
        }
      })
      // console.log(obj1);
      res.send(obj1);
    })
})


router.get('/reviews', cors('http://localhost:3000'), function(req, res, next){

  let sql;

  sql ="select replace(programs.link, '/', '') as program,  reviews.link,  reviews.title,  reviews.content,  reviews.post_date  from reviews  inner join programs on reviews.programs_id = programs.id";
  db.query(sql, (error, result) => {
    if (error) throw error;
    let obj = {};
    //데이터를 담을 객체 obj 생성
    result.map(v => { 
      //쿼리문 결과가 객체 배열, 이를 반복함.
     if (!(v.program in obj))
        obj[v.program] = [];        
        //객체에서 program이라는 키가 obj에 존재하지 않으면, 해당 키값에 대한 배열 생성
      obj[v.program].push(v);
      //program의 키값을 갖는 객체에 v객체 할당.
      delete v['program'];
      //program의 키는 사용하지 않으므로 삭제함.
    })
    console.log(obj);
     res.json(obj);
  })
})

router.get('/navlists', function(req, res, next){
  let sql;

  sql ="select title as program, link as href from programs";
  db.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.json(result);
  })
})

router.get('/noticelists', function(req, res, next){
  let sql;
  
  sql ="select title, href, end_date as enddate from notice_lists";
  db.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.json(result);
  })

})
module.exports = router;