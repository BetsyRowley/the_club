//Base Modules
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/user',
        failureRedirect: '/'
    })
);

//Base Route
router.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

//Add 404 ??????

module.exports = router;
