var express = require('express');
var router = express.Router();
let db = require('../config/db_config');
const jwt = require('jsonwebtoken');
let secretObj = require('../config/jwt');

router.get('/', function(req, res, next){
    res.clearCookie('admin');
    res.redirect('/api/login');
})

module.exports = router;
