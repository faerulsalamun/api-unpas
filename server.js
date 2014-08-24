// Set Require
var express = require('express');
    config = require('./config/app.js');
    middleware = require('./middleware/middleware.js');
    query = require('./models/query.js');
    session = require('express-session');
    mysql = require('mysql');
    response = require('./tools/response.js');

    // Controller
    fakultas = require('./controllers/fakultas.js');
    jurusan = require('./controllers/jurusan.js');
    information = require('./controllers/information.js');


// Express Config
var app = express();
    router = express.Router();
    app.use(session({
      secret: '123456',
      name: 'session',
      proxy: true,
      resave: true,
      saveUninitialized: true
  }));

// MySQL Config 
    pool = mysql.createPool(config.mysqlDev);
    
// version
// bump when doing update
var version = '1.0.0'

app.get('/', function(req, res){
   response.endResponse(res,'0','Welcome To API Universitas Pasundan :)'); 
});

// Route
require('./routes/routes')(app);

//error handlers

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
        message: err.message,
        error: {}
    });
});


// ups
process.on('uncaughtException',function(err){
  console.error(err.stack);
});

// start server
app.listen(config.port,config.ip);
console.log(config.page.appName + ' server version ' + version + ' is running on port : ' + config.port);