/**
 * Client REST HTTP - GET/POST
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';//DELETEME - only due my certificate is a fake

var https = require('https');

// options for GET
var options = {
    host : 'localhost', // here only the domain name
    port : 3000,//https
    path : '/api/notes', // the rest of the url with parameters if needed
    method : 'GET' // do GET/POST
};

//var options = {
//		  host: 'loopbackstarterapp.stefanosieibmcom-testapiconnect.apic.mybluemix.net',
//		  port: 443,
//		  path: '/api/Cars',
//		  method: 'GET'
//		};

 
console.info('Options prepared:');
console.info(options);
console.info('Do the HTTP call');
 
// do the GET/POST request
var req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
  
    res.on('data', function(d) {
        console.info('result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });
 
});
 
req.end();
req.on('error', function(e) {
    console.error(e);
});
 