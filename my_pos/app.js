
/**
 * Module dependencies.
 */

var express 	= require('express')
  , app 		= express()
  , http 		= require('http')
  , path 		= require('path')
  , mongoose 	= require('mongoose');

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// ROUTER
var main 		= require('./routes/main/main'),
	settings	= require('./routes/settings/settings');

// DB
mongoose.connect("mongodb://localhost:27017/my_pos");
var db = mongoose.connection;
db.once('open', function(){
	console.log('DB connected!');
});
db.on('error', function(err){
	console.log('DB error : ', err);
});

// VIEW
app.get('/main', main.main);

//settings
app.get('/settings', settings.settings);
app.get('/settings/tableView', settings.tableView);
app.post('/settings/tableInsert', settings.tableInsert);

//SERVER
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
