// Load our custom module from mymodule.js
const mymodule = require('./mymodule.js');

// Get the directory and extension from the command line
const dir = process.argv[2];   // directory path
const ext = process.argv[3];   // extension without the dot, like 'txt'

// Call the module function
mymodule(dir, ext, function (err, list) {
  // If there was an error, log it and stop
  if (err) {
    return console.log('Error:', err);
  }

  // list is the filtered array of filenames
  list.forEach(function (file) {
    console.log(file);
  });
});