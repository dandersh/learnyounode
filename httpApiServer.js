var http = require('http');
var url = require('url');

var port = process.argv[2] || 3000;

var server = http.createServer(function(request, response) {
    var reqUrl = url.parse(request.url);
    var isoTime = reqUrl.query.substring(4); 

    var time =  isoTime.slice(11, 19).split(':');
    var jsonTime = {
	'hour' :   parseInt(time[0]),
	'minute' : parseInt(time[1]),
	'second' : parseInt(time[2])
    };
    
    function getTime(value) {
	return {
	    hour: value.getHours(),
	    minute: value.getMinutes(),
	    second: value.getSeconds()
	}
    }

    var returnedTime = getTime(new Date(isoTime));
    var unixTime = new Date(isoTime).getTime();
    var unixResponse =  {"unixtime" : unixTime};
    response.writeHead(200, { 'Content-Type' : 'application/json' });    
    if (reqUrl.pathname === "/api/unixtime") {
	response.write(JSON.stringify(unixResponse));
	response.end();
    } else if (reqUrl.pathname === "/api/parsetime") { 
	response.write(JSON.stringify(returnedTime)); 
	response.end();
    } else {
	response.writeHead(404);
	response.end();
    }

});

server.listen(port);
console.log('Server listening on: ' + port);


