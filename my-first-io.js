// Bring in the file system module so we can read files
const fs = require('fs');

// Read the entire file at once, synchronously.
// process.argv[2] is the file path provided in the command line.
// This gives us a Buffer containing the raw file data.
const contents = fs.readFileSync(process.argv[2]);

// Convert the Buffer into a normal string so we can work with text.
const str = contents.toString();

// Count the number of newline characters.
// Splitting on '\n' creates one more piece than the number of newlines.
const lineCount = str.split('\n').length - 1;

// Print the number of newlines to the console.
console.log(lineCount);