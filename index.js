var express = require('express');
var path = require('path');

var bodyparser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));;
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.set('port', process.env.PORT || 3003);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port 3002');
});


module.exports = app;