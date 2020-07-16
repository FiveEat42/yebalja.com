var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let secretObj = require('../config/jwt');

router.get('/', function(req, res, next) {
//admin이라는 이름을 가진 쿠키를 token에 할당,
  let token = req.cookies['admin'];
//token 존재시, verify메소드로 디코드 작업 수행,
//디코드 된 내용이 admin으로 지정한 계정명과 같다면 db/program으로 접속가능
  let decoded = jwt.verify(token, secretObj.secret);
  if(decoded.email == secretObj.adminAccount){
    console.log('관리자 계정입니다.');
    res.redirect('/api/admin/db/program');
  }
  else{
    console.log('관리자 계정이 아닙니다.')
    res.redirect('/api/login');
  }
  console.log(token+"토큰");
  //res.render('admin');
});

module.exports = router;
