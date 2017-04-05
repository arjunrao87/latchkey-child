var express = require('express')
var app = express()
var bodyParser = require("body-parser");
var path = require('path');
var api = require('./api.js');

// Start up server

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000, function () {
  console.log('LatchkeyServer listening on port 3000!')
});

// Incoming requests

app.get('/', function (req, res) {
  res.send( api.homepage() );
});

app.post('/code', function( req, res ) {
  res.send( api.code( req ) );
})

app.post('/unlock', function( req, res ){
  var code = req.body.code;
  res.send( api.unlock( code ) );
});

app.get('/data/', function( req, res ){
  res.send( api.data( 1 ) );
});

app.get('/data/:days', function( req, res ){
  res.send( api.data( req.params.days ) );
});

// Serve web client

app.get('/client', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
