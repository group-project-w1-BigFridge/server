const axios = require('axios')

const spoonAPI = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes'
});

module.exports = spoonAPI