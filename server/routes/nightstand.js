var express = require('express');
var router = express.Router();
var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

console.log('in the night stand router');
// Handles POST request with new night stand book
router.post('/', function(req, res) {
console.log('in the night stand post router');
  var saveNightStand = {
    title: req.body.title,
    author: req.body.author_name[0],
    memberID: '',
    notes: '',
  };
  console.log('new Nightstand:', saveNightStand);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting: ', err);
      res.sendStatus(500);
    }
    client.query('INSERT INTO spotlight (title, author, isbn, publishedYear)' +
                  'VALUES ($1, $2, $3, $4) RETURNING id',
  [saveSpotlight.title, saveSpotlight.author, saveSpotlight.isbn, saveSpotlight.publishedYear],
        function (err, result) {
          done();

          if(err) {
            console.log('Error inserting data: ', err);
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });
  });

}); //Ends POST request

module.exports = router;
