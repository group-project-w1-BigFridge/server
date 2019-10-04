const express = require('express')

const router = express.Router()
const RecipeController = require('../controllers/recipeController')

router.post('/', RecipeController.find)
router.post('/images', RecipeController.findImages)
router.get('/youtube/:search', RecipeController.youtubeVideos)

router.get('/:id', RecipeController.recipeId)
module.exports = router