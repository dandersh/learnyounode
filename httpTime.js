var net = require('net');
var strftime = require('strftime');

console.log(strftime('%B %d, %Y %H:%M:%S'))
var port = process.argv[2];

var zeroPadDate = function(value) {
    if (value <= 10) {
	return '0' + value;
    } else {
	return value;
    }
};

var server = net.createServer(function(socket) {
    // Every connection to the server triggers this callback
   
	var date = new Date();
	var year = date.getFullYear().toString()
	var month = date.getMonth() + 1;
        month.toString();
	var day = date.getDate().toString()
	var hours = date.getHours().toString()
	var minutes = date.getMinutes().toString()
	var result = year + "-" + "0" +  month + "-" + day + " " + hours + ":" + minutes;
	var test = strftime(year + "-" + zeroPadDate(month) + "-" + zeroPadDate(day) + " " + "%H:%M");
	socket.end(test +"\n");
   
    
});

server.listen(port);
console.log('Server listening on ' + port);
