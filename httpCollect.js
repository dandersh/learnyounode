var http = require('http');
var bufferList = require('bl');
var cs = require('concat-stream');

var url = process.argv[2];

/* Concat-Stream concatenates the data from a stream and pipes it out to a callback. Buffer List is a wrapper for Node Buffers that operates as a duplex stream, meaning they can both emit (to a consumable stream) and be emitted. Here Buffer List is concatenating all the buffer objects. */
/*
http.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(bufferList (function(err, data) {
	if (err) {
	    console.log("There was an error: " + err);
	}
	console.log(data.length);
	console.log(data.toString());
    }));
}); */

http.get(url, function(response) {
    response.pipe(cs(function(data) {
	console.log(data.length);
	console.log(data.toString());
    }));
});
