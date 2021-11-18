// Include Nodejs' net module.
const net = require('net');
const conf = require('./config');

// The port on which the server is listening.
const port = conf.PORT;

// Create a new TCP server.
const server = net.createServer((connection) => {
    console.log('client connected');

    connection.on('end', () => {
        console.log('client disconnected');
        process.exit(0);
    });

    // Now that a TCP connection has been established, the server can send data to
    // the client by writing to its socket.
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});

// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
module.exports = () => server.listen(port, () => {
    console.log('server is listening');
});
