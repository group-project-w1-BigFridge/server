const User = require('../models/user')
const {OAuth2Client} = require('google-auth-library');
const {generateToken} = require('../helpers/jwt') 

class UserController {
  
  static list(req,res,next){
    User.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.json(err)
      })
  }

  static googleSignin(req,res,next){
    const client = new OAuth2Client(process.env.CLIENT_ID)
    let payloadjwt;
    let token;
    client.verifyIdToken({
      idToken:req.body.id_token,
      audience: process.env.CLIENT_ID
    })
    .then(ticket => {
      const payload = ticket.getPayload()
      const {email, name, picture} = payload
      payloadjwt = {email, name, picture}
      return User.findOne({name,email})
    })
    .then(userdata => {
      if(userdata){
        token = generateToken(payloadjwt)
        res.status(200).send(token)
      }
      else{
        res.redirect(`/users/googleRegister?name=${payloadjwt.name}&email=${payloadjwt.email}&picture=${payloadjwt.picture}`)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  static googleRegister(req,res,next){
    const{name,email,picture} = req.query
    let pass='dummy'
    User.create({email, name, picture, pass})
    .then(createdata => {
      const {name,email,picture} = createdata
      let token = generateToken({name,email,picture})
      res.status(200).send(token)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

module.exports = UserController