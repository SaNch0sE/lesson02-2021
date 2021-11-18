const http = require('http');
const url = require('url');

function getListener(req, res) {
    switch (req.url) {
        case '/hello':
            res.writeHead(200);
            res.end(JSON.stringify({ hello: 'World!' }));
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: '404 Not Found' }));
            break;
    }
}

function postListener(req, res) {
    let data = '';
    const q = url.parse(req.url, true);
    switch (q.pathname) {
        case '/getInfo':
            req.on('data', (chunk) => {
                data += chunk;
            });
            req.on('end', () => {
                const body = JSON.parse(data);
                if (body.login !== 'Alex' && body.password !== '12345678') {
                    res.writeHead(401);
                    res.end(JSON.stringify({ error: '401 Unauthorized' }));
                } else {
                    res.writeHead(200);
                    res.end(JSON.stringify({ info: 'Alex, 20 y.o.' }));
                }
            });
            break;
        default:
            res.writeHead(400);
            res.end(JSON.stringify({ error: '400 Bad Request' }));
            break;
    }
}

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(`Request: ${req.url}`);
    switch (req.method) {
        case 'GET':
            getListener(req, res);
            break;
        case 'POST':
            postListener(req, res);
            break;
        default:
            break;
    }
};

const server = http.createServer(requestListener);
module.exports = () => server.listen(8080, () => console.log('Server is listening on port 8080'));
