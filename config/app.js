// Config MySQL
var configMysql = {
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'unpas'
}

varmysql = require('mysql');

// app
var appName = 'API Universitas Pasundan';

var port = process.env.PORT ? process.env.PORT : 3000;
var webPrefix = '';
var staticHost = process.env.PORT ? 'apiunpas.faerul.web.id' : 'localhost:' + port;
var serverIp = process.env.PORT ? 'apiunpas.faerul.web.id' : 'localhost:' + port;
var serverPath = process.env.PORT ? 'apiunpas.faerul.web.id' + webPrefix : 'localhost:'+port+webPrefix;
var runOnLocal = process.env.PORT ? false : true;
var ip =  process.env.IP || '127.0.0.1';

module.exports = {
  mysqlDev : configMysql,

   // page settings
  page : {
    staticHost: staticHost,
    serverIp: serverIp,
    runOnLocal: runOnLocal,
    serverPath: serverPath,
    appName: appName,
  },

  serverPath: 'http://' + serverPath,
  runOnLocal: runOnLocal,
  webPrefix: webPrefix,
  port: port,
  staticHost: staticHost,
}
