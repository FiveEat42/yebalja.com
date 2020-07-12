var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let secretObj = require('../config/jwt');

router.get('/', function(req, res, next) {
  let token = req.cookies['admin'];
  if (token)
  {
    let decoded = jwt.verify(token, secretObj.secret);
    if(decoded.email == secretObj.adminAccount){
      console.log('관리자 계정입니다.');
    res.redirect('/api/admin/db/program');
    }
    else{
      console.log('관리자 계정이 아닙니다.')
      res.redirect('/api/login');
    }
  }
  console.log(token+"토큰");
  //res.render('admin');
});

module.exports = router;
