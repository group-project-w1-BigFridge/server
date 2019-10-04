const express = require('express')
const router = express.Router()
const UserRouter = require('../routers/userRouter')
const recipeRouter = require('./recipeRouter')

router.get('/', (req,res) => {
  res.status(200).json({message:"Connected"})
})
router.use('/users', UserRouter)
router.use('/recipes', recipeRouter)

module.exports = router
