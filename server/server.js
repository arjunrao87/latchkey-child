var express = require('express')
var app = express()
var api = require('./api.js');

app.get('/', function (req, res) {
  res.send(api.homepage());
})

app.listen(3000, function () {
  console.log('LatchkeyServer listening on port 3000!')
})
