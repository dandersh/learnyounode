var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function(err, data) {
    if (err) {
	res.send('error');
    }
    var text = data.toString();
    var newLines = text.match(/\n/g);
    console.log(newLines.length);
});
