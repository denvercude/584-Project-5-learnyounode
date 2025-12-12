const http = require('http');

// Make an HTTP GET request to the URL provided in the command line
http.get(process.argv[2], function (response) {

  // Convert response data to strings
  response.setEncoding('utf8');

  // This will store all chunks of data
  let fullData = '';

  // Collect each chunk as it arrives
  response.on('data', function (chunk) {
    fullData += chunk;
  });

  // When all data has been received
  response.on('end', function () {
    console.log(fullData.length);
    console.log(fullData);
  });
});