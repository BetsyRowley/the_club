var express = require('express');
var router = express.Router();
var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

// Handles POST request with new spotlight book
router.post('/spotlight', function(req, res, next) {

  var saveSpotlight = {
    title: req.body.title,
    author: req.body.author_name[0],
    isbn: req.body.isbn[0],
    publishedYear: req.body.first_publish_year
  };
  console.log('new Spotlight:', saveSpotlight);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log("Error connecting: ", err);
      next(err);
    }
    client.query("INSERT INTO spotlight (title, author, isbn, publishedYear) VALUES ($1, $2, $3, $4) RETURNING id",
      [saveSpotlight.title, saveSpotlight.author, saveSpotlight.isbn, saveSpotlight.publishedYear],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data: ", err);
            next(err);
          } else {
            res.redirect('/');
          }
        });
  });

});


module.exports = router;
