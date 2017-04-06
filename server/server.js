var express = require('express')
var app = express()
var bodyParser = require("body-parser");
var path = require('path');
var api = require('./api.js');
var logger = require('./log.js')

// Start up server

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/web')))

app.listen(3000, function () {
  logger.info('LatchkeyServer listening on port 3000!')
});

// Incoming requests

app.get('/key', function( req, res ) {
  res.send( api.key( req ) );
})

app.post('/unlock', function( req, res ){
  var code = req.body.code;
  logger.info( "Received request to unlock with code = " + code );
  res.send( api.unlock( code ) );
});

app.get('/data/', function( req, res ){
  res.send( api.data( 1 ) );
});

app.get('/data/:days', function( req, res ){
  res.send( api.data( req.params.days ) );
});

// Serve web client

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/web/index.html'));
});
