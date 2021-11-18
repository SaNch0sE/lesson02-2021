const axios = require('axios');

axios({
    method: 'GET',
    url: 'http://127.0.0.1:8080/hello',
})
    .then((response) => {
        console.log(response);
    });
