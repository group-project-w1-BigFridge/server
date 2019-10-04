const express = require('express')
const recipeRouter = require('./recipeRouter')
const router = express.Router()

router.use('/recipes', recipeRouter)

module.exports = router