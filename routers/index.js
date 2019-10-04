const router = require('express').Router()
const UserRouter = require('../routers/userRouter')

router.get('/', (req,res) => {
  res.json({message:"Hello World!"})
})

router.use('/users', UserRouter)

module.exports = router