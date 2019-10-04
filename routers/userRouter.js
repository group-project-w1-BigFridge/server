const router = require('express').Router()
const UserController = require('../controllers/userController')
const {verifyToken} = require('../helpers/jwt') 

function middleLogin(req,res,next){
  let data = req.headers.authorization
  let decodedata = verifyToken(data)
  console.log(decodedata, data)
  if(decodedata){
    next()
  }
  else{
    res.status(400).json({message:'Kamu belum punya token'})
    // res.redirect('/')
  }
}

router.get('/', middleLogin, UserController.list)
router.post('/login', UserController.login)
router.post('/googleSignin', UserController.googleSignin)
router.get('/googleRegister',UserController.googleRegister)

module.exports = router