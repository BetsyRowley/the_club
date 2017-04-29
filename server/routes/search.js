var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var request = require('request');

router.get('/:book', function(req, res) {
  console.log(req.params.book);
  var book = req.params.book;
  console.log(book);
  var query = 'http://openlibrary.org/search.json?title=' + book;
  console.log(query);
  request(query, function(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    if(!error && response.statusCode == 200) {
      res.send(body);
    } else {
      console.log(error);
      res.sendStatus(500);
    }

  });
});


module.exports = router;
