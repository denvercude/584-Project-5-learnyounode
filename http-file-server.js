const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer(function (req, res) {
  // Create a read stream for the file provided in the command line
  const fileStream = fs.createReadStream(process.argv[3]);

  // Pipe the file stream directly to the HTTP response
  fileStream.pipe(res);
});

// Listen on the port provided in the command line
server.listen(process.argv[2]);