var express = require('express');
var router = express.Router();
var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

//GETs all messages
router.get('/', function(req, res) {

  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
    client.query('SELECT "Message", "MessageID", "timestamp", "first"' +
                  'FROM messages, users WHERE "MemberID" = "id" ORDER BY "MessageID" DESC;',
                  function(queryError, result) {
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

//POSTs new message to db
router.post('/', function(req, res) {

  var saveMessage = {
    MemberID: req.body.memberId,
    text: req.body.text,
    time: Date.now()
    // date: new Date()
  };
  console.log('New Message:', saveMessage);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting: ', err);
      res.sendStatus(500);
    }
    client.query('INSERT INTO messages ("MemberID", "Message", "timestamp")' +
                  'VALUES ($1, $2, $3) RETURNING "MessageID"',
  [saveMessage.MemberID, saveMessage.text, saveMessage.time],
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
