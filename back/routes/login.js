var express = require('express');
var router = express.Router();
let db = require('../models/db_config');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let secretObj = require('../config/jwt');
const flash = require('connect-flash');

router.get('/', function(req, res, next) {
    //alert는 윈도우 브라우저에서 수행되는 메소드이기 때문에 서버사이드에서 수행할 수 없다.
    //console.log로 찍어야한다.
    res.render('member/login');
  });

router.post('/', function(req, res, next){
  //request body의 key에 해당하는 값을 할당.
    const { login_email, login_password } = req.body;
  //view에서 input된 email 데이터를 DB에서 SELECT
    let sql = `SELECT * FROM member_table WHERE member_login_email = '${login_email}'`;
    db.query(sql, function(err, result){
      if (err) throw (err);
    //해당하는 값이 존재하지 않으면, 다음 문구 출력
      if (result == '')
      {
        console.log('일치하는 데이터가 없습니다.');
      }
    //값 존재시 input된 password를 hash하여 DB에 저장되어있는 해싱된 password와 비교작업
      else
      {
        bcrypt.compare(login_password, result[0].member_login_pw, function(err, result){
        //해싱되어 비교한 결과가 TRUE일 때, 로그인이 성공, jwt를 발행한다.
        //token에 담겨있는 유저정보는 email, 해당 정보를 암호화할 비밀키, 만료시간을 포함한다.
          if (result)
          {
            //로그인이 성공했을 때 토큰 발행
            token = jwt.sign({
              email : `${login_email}`
            },
            secretObj.secret, // 비밀키
            {
              expiresIn: '5m' // 유효시간
            })
          //토큰을 admin이라는 이름을 가진 cookie에 저장하고, 해당 작업이 성공(200)했다면, /api/admin으로 redirect한다.
            res.cookie('admin', token)
            .status(200)
            .redirect('/api/admin');
            //.json({loginSuccess: true, email: `${login_email}`});
            // 쿠키에 토큰 저장, json으로 토큰발행이 성공했는지 확인해주는 부분

            //토큰발행
            console.log('login success');
          }
        })
      }
    })
    //redirect를 넣으면 header오류가 발생함
    //res.redirect('/api/admin');
  })

      // login.pug에서 post로 넘겨받은 email, password를 비교해야한다.

      // email이 같은지비교하여 DB내 존재하면, 해당 password를 가져온다

      // 그 후, 입력된 password를 암호화하여 DB에서 가져온 데이터와 비교해 로그인이 성공하면 /api/admin으로 리다이렉트, 토큰생성을 진행한다.


module.exports = router;