const spoonAPI = require('../api/spoonAPI')
const spoonAPIKey = process.env.SPOON_API_KEY
const googleAPI = require('../api/googleAPI')
const googleAPIKey = process.env.GOOGLE_API_KEY
const googleCSEId = process.env.GOOGLE_CSE_ID

class RecipeController {
    static find(req, res, next) {
        if(!req.body.ingredients) {
            throw {status: 400, message: 'Please fill the form'}
        }
        let ingredients = req.body.ingredients.split(',').join(',+')
        spoonAPI.get(`recipes/findByIngredients?ingredients=${ingredients}&apiKey=${spoonAPIKey}`)
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static findImages(req, res, next) {
        googleAPI.get(`?key=${googleAPIKey}&cx=${googleCSEId}&q=${req.body.recipe}`)
        .then(({data}) => {
            let images = []
            console.log(data)
            data.items.forEach(item => {
                images.push(item.pagemap.cse_image[0].src)
            })
            res.status(200).json({images_src: images})
        }) 
        .catch(next)
    }
}

module.exports = RecipeController