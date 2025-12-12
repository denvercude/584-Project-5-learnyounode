const http = require('http');

// Store results in order
const results = [];
let completed = 0;

// Fetch data from a URL and store it at the correct index
function fetch(url, index) {
  http.get(url, function (response) {
    response.setEncoding('utf8');

    let data = '';

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function () {
      results[index] = data;
      completed++;

      // Once all requests are finished, print results in order
      if (completed === 3) {
        results.forEach(function (result) {
          console.log(result);
        });
      }
    });
  });
}

// Start all three requests at the same time
fetch(process.argv[2], 0);
fetch(process.argv[3], 1);
fetch(process.argv[4], 2);