const express = require('express')
const router = express.Router()
const recipeRouter = require('./recipeRouter')

router.use('/recipes', recipeRouter)

module.exports = router