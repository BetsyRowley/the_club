//Base Modules
var express = require('express');
var router = express.Router();
var path = require('path');

//Base Route
router.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

//Add 404 ??????

module.exports = router;
