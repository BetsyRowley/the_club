var express = require('express');
var router = express.Router();
var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

// Handles POST request with new spotlight book
router.post('/', function(req, res) {

  var saveSpotlight = {
    title: req.body.title,
    author: req.body.author_name[0],
    isbn: req.body.isbn[0],
    publishedYear: req.body.first_publish_year
  };
  console.log('new Spotlight:', saveSpotlight);

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
          done();//Chris added & removed next
          // client.end(); // necessary??

          if(err) {
            console.log('Error inserting data: ', err);
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });
  });

}); //Ends POST request

// Handles GET request for all ACTIVE spotlight books
router.get('/', function(req, res) {

  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
    client.query('SELECT * from spotlight WHERE active = true;', function(queryError, result) {
      done();
      if(queryError) {
        console.log('Error making query.');
        res.sendStatus(500);
      } else {
        // console.log(result);
        res.send(result.rows);
        }
      });
    }
  });
}); //Ends GET request

//Handles DELETE request
router.delete('/:id', function(req, res) {
console.log(req.params.id);
  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE from spotlight WHERE id = $1;', [req.params.id],
          function(queryError, result) {
            done();
            if(queryError) {
              console.log('Error making query');
              res.sendStatus(500);
            } else {
              console.log(result);
              res.sendStatus(200);
            }
          });
    }
  });
}); //Ends DELETE request

//Handles PUT request
router.put('/', function(req, res) {
  console.log(req.body);
  var title = req.body.title;
  var author = req.body.author;
  var active = req.body.active;
  var selected_by = req.body.selected_by;
  var meeting_date = req.body.meeting_date;
  var notes = req.body.notes;
  var id = req.body.id;

  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
      client.query('UPDATE spotlight SET (title = $1, author = $2, active = $3', +
                    'selected_by = $4, meeting_date = $5, notes = $6) WHERE id = $7;',
                  [title, author, active, selected_by, meeting_date, notes, id],
          function(queryError, result) {
            done();
            if(queryError) {
              console.log('Error making query');
              res.sendStatus(500);
            } else {
              console.log(result);
              res.sendStatus(200);
            }
          });
    }
  });
}); //end of PUT request


module.exports = router;
