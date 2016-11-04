var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/ui','/index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/ui', 'main.js'));
});

app.get('/game',function(req,res) {
 res.sendFile(path.join(__dirname, '/ui', '/game.html'));
});

app.use(express.static(__dirname + '/ui'));

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});