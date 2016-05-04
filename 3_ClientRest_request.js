
/**
 * Client REST request module 
 */

var request = require('request');
request('http://loopbackstarterapp.stefanosieibmcom-testapiconnect.apic.mybluemix.net/api/Cars', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
})