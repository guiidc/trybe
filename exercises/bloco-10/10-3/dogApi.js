const fetch = require('node-fetch');

const dogApi = () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(obj => obj)
}

module.exports = {dogApi};