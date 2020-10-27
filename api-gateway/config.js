/*
============================================
; Title:  config.js
; Author: Dan Ross
; Date:   18 October 2020
; Description: Global hub for application level configurations
;===========================================
*/
var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000'; 
module.exports = config;
config.web.secret = 'topsecret';