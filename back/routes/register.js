const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/db_config')
<<<<<<< HEAD

=======
>>>>>>> 654ee47ce7f255f6163bc06f77fc5f526a641ae4
router.get('/', function(req, res, next) {
  res.render('../views/register')
});

<<<<<<< HEAD
router.post('/', async (req, res, next) => {
	//email, password, nickname을 받아와 DB내에 저장한다.
    //저장될 때 성공, 실패를 맞추어야한다. 기준은 이메일의 중복, 닉네임의 중복.

    //이메일 또는 닉네임이 중복되면 반환하는 값을 console.log로 찍어본다

    //찍힌 값을 기준으로 성공, 실패를 구분하며, 성공시 api/login화면으로 리다이렉트,
    //실패시 console.log로 이메일, 닉네임 중복여부를 보여준다.
    let body = req.body;
    console.log(body);
    //bcrypt를 이용해 패스워드 hash생성
  const { nickname, email, password } = req.body;
  console.log(typeof(email))
  db.query(`SELECT * FROM member_table WHERE member_login_email = '${email}'`,(error, result) => {
    if (error) throw error;
    console.log('query result', result);
  });
  bcrypt.hash(req.body.password, 10, (err, hash) => {
  })
  res.redirect('/api/register')
=======
router.post('/', (req, res, next) => {
    //email, password, nickname을 받아와 DB내에 저장한다.
    //저장될 때 성공, 실패를 맞추어야한다. 기준은 이메일의 중복, 닉네임의 중복.
    //이메일 또는 닉네임이 중복되면 반환하는 값을 console.log로 찍어본다
    //찍힌 값을 기준으로 성공, 실패를 구분하며, 성공시 api/login화면으로 리다이렉트,
    //실패시 console.log로 이메일, 닉네임 중복여부를 보여준다.
    //bcrypt를 이용해 패스워드 hash생성

  const { nickname, email, password, passwordCheck } = req.body;
  if (password !== passwordCheck) {
    console.log('비밀번호 불일치');
    res.redirect('/api/register');
  } else {
    db.query(`SELECT * FROM member_table WHERE member_login_email = '${email}'`,
      (error, result) => {
        if (error) throw error;
        if (!result[0]) {
          db.query(`SELECT * FROM member_table WHERE member_login_nickname = '${nickname}'`,
            (err1, result1) => {
              if (err1) throw err1;
              if (!result1[0]) {
                bcrypt.hash(password, 10, (err, hash) => {
                  db.query(`
                    INSERT INTO member_table(member_login_nickname, member_login_pw, member_login_email)
                    VALUES (?, ?, ?)`,
                    [nickname, hash, email],
                    (err2, result2) => {
                      if (err2) throw err2;
                      console.log('result', result2);
                    })
                })
                req.flash('info', 'abcd');
                res.redirect('/api/admin')
              } else {
                console.log('닉네임 중복')
                res.redirect('/api/register')
              }
            })
        } else {
          console.log("이메일 중복")
          res.redirect('/api/register')
        }
      });
  }
>>>>>>> 654ee47ce7f255f6163bc06f77fc5f526a641ae4

})

module.exports = router;
