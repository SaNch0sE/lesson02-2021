const http = require('http');

const optionsGet = {
  hostname: '127.0.0.1',
  port: 8080,
  secure: false,
  path: '/hello',
  method: 'GET',
};

const req = http.request(optionsGet, (res) => {
  console.log(`statusCode: ${res.statusCode}\n`);
  let chunk = '';
  res.on('data', (d) => {
    chunk += d;
  });
  res.on('end', () => {
    console.dir(JSON.parse(chunk));
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();

const data = JSON.stringify({
  login: 'Alex',
  password: '12345678',
});

const optionsPost = {
  hostname: '127.0.0.1',
  port: 8080,
  path: '/getInfo',
  secure: false,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
  data,
};

const req2 = http.request(optionsPost, (res) => {
  console.log(`statusCode: ${res.statusCode}\n`);
  let chunk = '';
  res.on('data', (d) => {
    chunk += d;
  });
  res.on('end', () => {
    console.dir(JSON.parse(chunk));
  });
});

req2.on('error', (error) => {
  console.error(error);
});

req2.write(data);
req2.end();
