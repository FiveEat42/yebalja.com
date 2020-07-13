const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/db_config');
const util = require('util');

let db_promise = util.promisify(db.query).bind(db);

router.get('/', function(req, res, next) {
  res.render('../views/register',
    {
      email: '',
      nickname: '',
      nick_double_check: -1,
      email_double_check: -1,
      password_valid_check: -1,
    }
)
});

router.post('/', async (req, res, next) => {
  const { nickname, email, password, passwordCheck } = req.body;
  let nick_double_check = false;
  let email_double_check = false;
  let password_valid_check = false;

  //처음에 패스워드와 패스워드 확인의 비밀번호가 서로 일치하는 검사해서 일치할때만 다음단계로 넘어갑니다.
  if (password === passwordCheck) {
    password_valid_check = true;
  }

  try {
    const email_matched = await db_promise(`SELECT * FROM member_table WHERE member_login_email = '${email}'`);
    const nickname_matched = await db_promise(`SELECT * FROM member_table WHERE member_login_nickname = '${nickname}'`)
    email_double_check = !email_matched[0]
    nick_double_check = !nickname_matched[0]
  } finally {
    // console.log('nick',nick_double_check);
    console.log('nick',nick_double_check);
    console.log('email', email_double_check);
    if (email_double_check && nick_double_check && password_valid_check) {
      bcrypt.hash(password, 10, (err, hash) => {
        //위의 모든 테스트를 통과한 경우 정상데이터로 판단해서 DB에 넣습니다.
        db.query(`
                    INSERT INTO member_table(member_login_nickname, member_login_pw, member_login_email)
                    VALUES (?, ?, ?)`,
          [nickname, hash, email],
          (err2, result2) => {
            if (err2) throw err2;
            // console.log('회원가입 성공', result2);
          })
      })
      res.render('../views/register_success')
    } else {
      console.log({
        email: email,
        nickname: nickname,
        nick_double_check: nick_double_check,
        email_double_check: email_double_check,
        password_valid_check: password_valid_check,
      })
      res.render('../views/register',
        {
          email: email,
          nickname: nickname,
          nick_double_check: nick_double_check,
          email_double_check: email_double_check,
          password_valid_check: password_valid_check,
        }
      )
    }
  }

  // if (email_double_check && nick_double_check && password_valid_check) {
  //   bcrypt.hash(password, 10, (err, hash) => {
  //     //위의 모든 테스트를 통과한 경우 정상데이터로 판단해서 DB에 넣습니다.
  //     db.query(`
  //                   INSERT INTO member_table(member_login_nickname, member_login_pw, member_login_email)
  //                   VALUES (?, ?, ?)`,
  //       [nickname, hash, email],
  //       (err2, result2) => {
  //         if (err2) throw err2;
  //         // console.log('회원가입 성공', result2);
  //       })
  //   })
  //   res.redirect('/api/login')
  // } else {
  //   console.log({
  //       email: email,
  //       nickname: nickname,
  //       nick_double_check: nick_double_check,
  //       email_double_check: email_double_check,
  //     })
  //   res.render('../views/register',
  //     {
  //       email: email,
  //       nickname: nickname,
  //       nick_double_check: nick_double_check,
  //       email_double_check: email_double_check,
  //     }
  //   )
  // }
  // //입력받은 email과 db에 중복되는 데이터가 있는지 검사합니다.
  // let te = await db.query(`SELECT * FROM member_table WHERE member_login_email = '${email}'`,
  //   (error, result) => {
  //     if (error) throw error;
  //     if (result[0]) {
  //       console.log('email 중복 없음')
  //       email_double_check = true;
  //       // console.log('email_double_check', email_double_check);
  //     }
  //   }
  // )
  // // console.log('email_double_check', email_double_check);
  //
  // console.log('test', te);
  // //입력받은 nickname과 db에 중복되는 데이터가 있는지 검사합니다.
  // db.query(`SELECT * FROM member_table WHERE member_login_nickname = '${nickname}'`,
  //   (err1, result1) => {
  //     if (err1) throw err1;
  //     if (result1[0]) {
  //       // console.log('nickname 중복 없음')
  //       nick_double_check = true;
  //       // console.log('nick_double_check', nick_double_check);
  //     }
  //   }
  // )
  // // console.log('nick_double_check', nick_double_check);
  //
  // console.log(email_double_check, nick_double_check, password_valid_check);




  //
  // //처음에 패스워드와 패스워드 확인의 비밀번호가 서로 일치하는 검사해서 일치할때만 다음단계로 넘어갑니다.
  // if (password !== passwordCheck) {
  //   console.log('비밀번호 불일치');
  //   res.redirect('/api/register');
  // } else {
  //   //입력받은 email과 db에 중복되는 데이터가 있는지 검사합니다.
  //   db.query(`SELECT * FROM member_table WHERE member_login_email = '${email}'`,
  //     (error, result) => {
  //       if (error) throw error;
  //       if (!result[0]) {
  //         //입력받은 nickname과 db에 중복되는 데이터가 있는지 검사합니다.
  //         db.query(`SELECT * FROM member_table WHERE member_login_nickname = '${nickname}'`,
  //           (err1, result1) => {
  //             if (err1) throw err1;
  //             if (!result1[0]) {
  //               //입력받은 password를 암호화합니다.
  //               bcrypt.hash(password, 10, (err, hash) => {
  //                 //위의 모든 테스트를 통과한 경우 정상데이터로 판단해서 DB에 넣습니다.
  //                 db.query(`
  //                   INSERT INTO member_table(member_login_nickname, member_login_pw, member_login_email)
  //                   VALUES (?, ?, ?)`,
  //                   [nickname, hash, email],
  //                   (err2, result2) => {
  //                     if (err2) throw err2;
  //                     console.log('회원가입 성공', result2);
  //                   })
  //               })
  //               res.redirect('/api/login')
  //             } else {
  //               console.log('닉네임 중복')
  //               res.redirect('/api/register')
  //             }
  //           })
  //       } else {
  //         console.log("이메일 중복")
  //         res.render('../views/register', { nickname: nickname, email: email, emailFlag: false, })
  //         res.redirect('/api/register')
  //       }
  //     });
  // }

})

module.exports = router;
