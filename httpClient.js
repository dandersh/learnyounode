var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
	console.log(chunk);
    });
}).on('error', function(err) {
    console.log("Error is: " + err.message);
});




