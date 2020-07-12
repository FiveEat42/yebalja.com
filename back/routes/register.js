const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/db_config')
router.get('/', function(req, res, next) {
  res.render('../views/register')
});

router.post('/', (req, res, next) => {
  const { nickname, email, password, passwordCheck } = req.body;
  //처음에 패스워드와 패스워드 확인의 비밀번호가 서로 일치하는 검사해서 일치할때만 다음단계로 넘어갑니다.
  if (password !== passwordCheck) {
    console.log('비밀번호 불일치');
    res.redirect('/api/register');
  } else {
    //입력받은 email과 db에 중복되는 데이터가 있는지 검사합니다.
    db.query(`SELECT * FROM member_table WHERE member_login_email = '${email}'`,
      (error, result) => {
        if (error) throw error;
        if (!result[0]) {
          //입력받은 nickname과 db에 중복되는 데이터가 있는지 검사합니다.
          db.query(`SELECT * FROM member_table WHERE member_login_nickname = '${nickname}'`,
            (err1, result1) => {
              if (err1) throw err1;
              if (!result1[0]) {
                //입력받은 password를 암호화합니다.
                bcrypt.hash(password, 10, (err, hash) => {
                  //위의 모든 테스트를 통과한 경우 정상데이터로 판단해서 DB에 넣습니다.
                  db.query(`
                    INSERT INTO member_table(member_login_nickname, member_login_pw, member_login_email)
                    VALUES (?, ?, ?)`,
                    [nickname, hash, email],
                    (err2, result2) => {
                      if (err2) throw err2;
                      console.log('회원가입 성공', result2);
                    })
                })
                res.redirect('/api/login')
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

})

module.exports = router;
