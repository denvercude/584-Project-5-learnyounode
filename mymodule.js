// Bring in the file system and path modules
const fs = require('fs');
const path = require('path');

// Export a single function that follows the Node callback pattern
// dir: directory path
// ext: extension filter (like 'txt', without the dot)
// callback: function to call when done: callback(err, data)
module.exports = function (dir, ext, callback) {
  // Read the directory asynchronously
  fs.readdir(dir, function (err, list) {
    // If there is an error, pass it to the callback and return early
    if (err) {
      return callback(err);
    }

    // Filter the list by the given extension
    const filtered = list.filter(function (file) {
      // path.extname(file) gives something like '.txt'
      return path.extname(file) === '.' + ext;
    });

    // No error, so pass null for the error and the filtered array as data
    callback(null, filtered);
  });
};