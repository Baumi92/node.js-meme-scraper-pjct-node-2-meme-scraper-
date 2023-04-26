const axios = require('axios');

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

axios
  .get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
