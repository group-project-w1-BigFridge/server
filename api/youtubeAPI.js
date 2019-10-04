const axios = require('axios')

const youtubeAPI = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

module.exports = youtubeAPI