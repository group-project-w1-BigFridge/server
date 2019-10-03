const spoonAPI = require('../api/spoonAPI')
const spoonAPIKey = process.env.SPOON_API_KEY

class RecipeController {
    static find(req, res, next) {
        let ingredients = req.body.ingredients.split(',').join(',+')
        spoonAPI.get(`recipes/findByIngredients?ingredients=${ingredients}&apiKey=${spoonAPIKey}`)
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = RecipeController