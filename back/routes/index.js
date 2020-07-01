var express = require('express');
var router = express.Router();
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(express.static(path.join(__dirname, '../../front/build/index.html')));
});

module.exports = router;
