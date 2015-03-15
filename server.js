var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine
app.engine('html', exphbs({defaultLayout: 'main', extname: 'html'}));
app.set('view engine', 'html');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
  res.render('index', { title: 'Granular' });
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});