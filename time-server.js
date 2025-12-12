const net = require('net');

// Create a TCP server
const server = net.createServer(function (socket) {
  // Get the current date and time
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  // Format: YYYY-MM-DD hh:mm
  const timeString = `${year}-${month}-${day} ${hour}:${minute}\n`;

  // Send the time and close the connection
  socket.end(timeString);
});

// Listen on the port provided in the command line
server.listen(process.argv[2]);