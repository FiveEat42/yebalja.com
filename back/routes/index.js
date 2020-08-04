var express = require('express');
var router = express.Router();
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index',{title: '세초월드'});
});

module.exports = router;
