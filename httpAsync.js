var http = require('http');
var bl = require('bl');

/*
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var results = '';

http.get(url1, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
	results += chunk;
	
    });
    response.on('end', function() {
	console.log(results);
	results = '';
        http.get(url2, function(response) {
	    response.setEncoding('utf8');
	    response.on('data', function(chunk) {
		results += chunk;
	    });
	    response.on('end', function() {
		console.log(results);
		results = '';
		http.get(url3, function(response) {
		    response.setEncoding('utf8');
		    response.on('data', function(chunk) {
			results += chunk;

		    });
		    response.on('end', function() {
			console.log( results);
		    });
		});
	    });
	});
    });
});

*/

// official solution using Buffer List
/*
var results = [];
var count = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
	console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
	response.pipe(bl(function(err, data) {
	    if (err) {
		return console.log(err);
	    }
	    results[index] = data.toString();
	    count++;

	    if (count === 3) {
		printResults();
	    }
	}));
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}

*/
// solution using Async module
var async = require('async');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var httpGet = function(url, order) {
    http.get(url, function(response) {
	response.on('data', function(chunk) {
	    console.log('This order is  done: ' + order);
	});
    });
}

async.series([
   httpGet(url1, 1),
   httpGet(url2, 2),
   httpGet(url3, 3)
],
function (err, results) {
    if (err) {
	console.log(err)
    }
    console.log(results);
});
