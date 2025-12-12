const http = require('http');
const map = require('through2-map');

// Create an HTTP server
const server = http.createServer(function (req, res) {

  // Only handle POST requests
  if (req.method !== 'POST') {
    return res.end('Send me a POST\n');
  }

  // Convert incoming data to uppercase and send it back
  req
    .pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    }))
    .pipe(res);
});

// Listen on the port provided in the command line
server.listen(process.argv[2]);