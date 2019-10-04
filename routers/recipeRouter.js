const express = require('express')
const RecipeController = require('../controllers/recipeController')
const router = express.Router()

router.get('/youtube/:search', RecipeController.youtubeVideos)

router.get('/:id', RecipeController.recipeId)

module.exports = router