var fs  = require('fs');

var file = fs.readFileSync(process.argv[2]).toString();

var newLines = file.match(/\n/g);
console.log(newLines.length);
