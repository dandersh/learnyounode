var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    if (request.method !== 'POST') {
	response.end('A post is required');
    }
/* 
   // If we didn't need to transform the data we could pipe the request directly to the response like so:

    var body = '';
    request.on('data', function(chunk) {
	body += chunk;
    });
    request.on('end', function() {
	console.log(body.toUpperCase());
    });
    request.pipe(response);
*/

    request.pipe(map(function(chunk) {
	return chunk.toString().toUpperCase();
    })).pipe(response); 
});

server.listen(port);
console.log('Server listening on: ' + port);
