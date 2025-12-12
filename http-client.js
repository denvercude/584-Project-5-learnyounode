const http = require('http');

// Make an HTTP GET request to the URL provided in the command line
http.get(process.argv[2], function (response) {

  // Convert response data to strings instead of Buffers
  response.setEncoding('utf8');

  // Print each chunk of data as it arrives
  response.on('data', function (chunk) {
    console.log(chunk);
  });
});