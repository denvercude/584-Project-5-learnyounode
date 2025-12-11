// Bring in the file system module so we can read files
const fs = require('fs');

// Read the file asynchronously.
// process.argv[2] is the file path from the command line.
// 'utf8' tells Node to give us a normal string instead of a Buffer.
// The callback runs AFTER the file is done being read.
fs.readFile(process.argv[2], 'utf8', function (err, data) {

  // If something went wrong, log the error and stop the program
  if (err) {
    return console.log(err);
  }

  // Count the number of newline characters
  // Splitting on '\n' gives us one more piece than the number of newlines
  const lineCount = data.split('\n').length - 1;

  // Print the result
  console.log(lineCount);
});
