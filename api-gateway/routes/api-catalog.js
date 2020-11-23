/*
============================================
; Title:  index.js
; Author: Dan Ross
; Date:   27 October 2020
; Description: API Routes
;===========================================
*/

/**
 * API Routes
 */
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

//POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//POST request for user logins
router.post('/auth/login', auth_controller.user_login);

//GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

//GET request for user logout
router.get('/auth/logout', auth_controller.user_logout);



module.exports = router;

