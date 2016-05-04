
/**
 * Client REST node-rest-client module 
 */

var Client = require('node-rest-client').Client;

var client = new Client();

client.registerMethod("jsonMethod", "http://loopbackstarterapp.stefanosieibmcom-testapiconnect.apic.mybluemix.net/api/Cars", "GET");

client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object
    console.log(data);
    console.log('----------------------------------------------');
    // raw response
    console.log(response);
});