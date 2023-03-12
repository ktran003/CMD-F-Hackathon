import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/v1/generate',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer GpzUxj94voFnVUxKgbWQooaXdXOd7N2sgkqKMTfj'
  },
  data: {model: 'xlarge', truncate: 'END'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });