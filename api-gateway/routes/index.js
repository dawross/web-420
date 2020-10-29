/*
============================================
; Title:  index.js
; Author: Dan Ross
; Date:   27 October 2020
; Description: API Routes
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
