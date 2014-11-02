var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file =  process.argv[3];

var options = {
    flags: 'r',
    encoding: 'utf8',
    autoClose: true
};

var server = http.createServer(function(request, response) {
    /* This callback is invoked each time there is a connection to the server. Both request and response objects are streams. */
   var stream = fs.createReadStream(file, options);
    // 'stream' is a stream object, allowing us to pipe it directly to the response object
   stream.pipe(response);
    
});

server.listen(port);
console.log('Server is listening on port: ' + port);
