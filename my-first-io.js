const fs = require('fs');

const contents = fs.readFileSync(process.argv[2]);
const str = contents.toString();
const lineCount = str.split('\n').length - 1;

console.log(lineCount);

