

/**
 * Client REST http module 
 */


const http = require('http');

var options = {
  host: 'loopbackstarterapp.stefanosieibmcom-testapiconnect.apic.mybluemix.net',
  port: 80,
  path: '/api/Cars',
  method: 'GET'
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();