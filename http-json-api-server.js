const http = require('http');

const server = http.createServer(function (req, res) {
  // Only handle GET requests
  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end();
  }

  // Parse the URL and query string
  const url = new URL(req.url, 'http://localhost');
  const iso = url.searchParams.get('iso');

  // If iso is missing, respond with 400
  if (!iso) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Missing iso query parameter' }));
  }

  const date = new Date(iso);

  // If iso is invalid, date becomes Invalid Date
  if (isNaN(date.getTime())) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Invalid iso date' }));
  }

  let result;

  if (url.pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (url.pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime()
    };
  } else {
    // Unknown route
    res.statusCode = 404;
    return res.end();
  }

  // Send JSON response
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
});

server.listen(process.argv[2]);
