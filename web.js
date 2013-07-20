var express = require('express');
var app = express();
var fs = require('fs');
var buf = new Buffer(128);
var output = (fs.readFileSync('index.html').toString();

//var output = buf.toString();
app.use(express.logger());

console.log(buf.toString());

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
