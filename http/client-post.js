const axios = require('axios');

async function client() {
    const res = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8080/getInfo',
        data: {
            login: 'Alex',
            password: '12345678',
        },
    });

    console.log('Result: ');
    console.log(res);
}

client();
