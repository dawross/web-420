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

//user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};
//get by ID
module.exports.getById = (id, callback) => {
    var query = { id: id};
    User.findById(query, callback);
}

module.exports = mongoose.model('User', userSchema);