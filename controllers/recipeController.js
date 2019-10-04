const youtubeAPI = require('../api/youtubeAPI')
const spoonApi = require('../api/spoonAPI')

class RecipeController{

    static youtubeVideos(req, res, next){
        const search = req.params.search || 'yummy'
        youtubeAPI.get(`/search?part=id&maxResults=5&order=relevance&key=AIzaSyCWEEohf9AW6nbxt5K21CbY4UqW0hPZjm4&q=${search}`)
            .then(({data})=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                console.log(123);
                
                res.status(500).json(err)
            })
    }


    static recipeId(req, res, next){
        const id = req.params.id
        spoonApi.get(`/${id}/information?apiKey=f3207c5da10e4239b71a095a0bdfef33`)
            .then(({data})=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }

}

module.exports = RecipeController