var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var routes = require('./routes')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public/www'));

app.use('',routes)


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

