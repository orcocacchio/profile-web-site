var express = require("express");
var logfmt = require("logfmt");
var compression = require('compression');
var bodyParser = require('body-parser');

var app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', './app/views');

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/assets'));
require('./lib/routes')(app);

app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(logfmt.requestLogger());

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});