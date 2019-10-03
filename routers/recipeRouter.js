const express = require('express')
const router = express.Router()
const RecipeController = require('../controllers/recipeController')

router.post('/', RecipeController.find)

module.exports = router