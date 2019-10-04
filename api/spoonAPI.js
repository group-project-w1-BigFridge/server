const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.spoonacular.com/'
})

module.exports = instance
