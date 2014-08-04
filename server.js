var express = require("express");
var logfmt = require("logfmt");

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './app/views');

require('./lib/routes')(app);

app.use(logfmt.requestLogger());

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
  console.log("Listening on " + port);
});