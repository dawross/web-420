/*
============================================
; Title:  user.js
; Author: Dan Ross
; Date:   25 October 2020
; Description: File for the user database model
;===========================================
*/
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: {type: String, required: true },
    password: {type: String, required: true },
    email: {type: String, required: true }
});
module.exports = mongoose.model('User', userSchema);