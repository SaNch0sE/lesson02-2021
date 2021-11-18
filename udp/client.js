const dgram = require('dgram');
const conf = require('./config');

const { PORT, HOST } = conf;

// creating a udp server
const client = dgram.createSocket('udp4');
// buffer msg
const message = Buffer.from('My KungFu is Good!');

// sending msg
module.exports = () => client.send(message, 0, message.length, PORT, HOST, (err) => {
    if (err) throw err;

    console.log(`UDP message sent to ${HOST}:${PORT}`);
    // close connection
    client.close();
});
