const fs = require('fs');      // File system module to read directories
const path = require('path');  // Path module to work with file paths

// Get the directory and extension from the command line.
// Example: node filtered-ls.js some_folder txt
const dir = process.argv[2];          // Directory path (first argument)
const ext = '.' + process.argv[3];    // Extension with dot, like ".txt"

// Read the contents of the directory asynchronously
fs.readdir(dir, function (err, list) {
  // If there was an error, print it and stop
  if (err) {
    return console.log(err);
  }

  // list is an array of filenames in the directory
  list.forEach(function (file) {
    // Check if the file's extension matches the one we care about
    if (path.extname(file) === ext) {
      // If it matches, print the file name
      console.log(file);
    }
  });
});