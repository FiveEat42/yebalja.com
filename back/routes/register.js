var express = require('express');
var router = express.Router();
var url = require('url');
let db = require('../models/db_config');
var bcrypt = require('bcrypt-nodejs');

router.get('/', function(req, res, next) {
    res.render('member/register');
  });
  

router.post('/', function(req, res, next){
    //email, password, nickname을 받아와 DB내에 저장한다.
    //저장될 때 성공, 실패를 맞추어야한다. 기준은 이메일의 중복, 닉네임의 중복.

    //이메일 또는 닉네임이 중복되면 반환하는 값을 console.log로 찍어본다

    //찍힌 값을 기준으로 성공, 실패를 구분하며, 성공시 api/login화면으로 리다이렉트,
    //실패시 console.log로 이메일, 닉네임 중복여부를 보여준다.
    let body = req.body;
    console.log(body);
    //bcrypt를 이용해 패스워드 hash생성
    bcrypt.hash(body.user_password, null ,null, function(err, hash){
        console.log("hash data: "+hash);
    });
    //중복체크해야함 이건 내일하자..
    res.redirect('/api/admin');
})

module.exports = router;