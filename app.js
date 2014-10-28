var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

//data to work with
var datadata = require('./models/dummydata.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/search', indexController.search);
app.post('/searchWord', indexController.searchWord)

var server = app.listen(5700, function() {
	console.log('Express server listening on port ' + server.address().port);
});
