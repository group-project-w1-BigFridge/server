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

  static login(req,res,next){
    console.log('MASUK')
    const {email, pass} = req.body
    User.findOne({email})
      .then(data => {
        if(data && data.pass === pass){
          const payload = {email:data.email, name:data.name}
          let token = generateToken(payload)
          let name = data.name
          res.status(200).json({token,name})
        }
        else{
          throw {status: 400, message: 'Wrong password/email'}
        }
      })
      .catch(next)
  }

  static googleSignin(req,res,next){
    const client = new OAuth2Client(process.env.CLIENT_ID)
    let payloadjwt;
    let token;
    let googleUserName;
    client.verifyIdToken({
      idToken:req.body.id_token,
      audience: process.env.CLIENT_ID
    })
    .then(ticket => {
      const payload = ticket.getPayload()
      const {email, name, picture} = payload
      payloadjwt = {email, name, picture}
      googleUserName = name
      return User.findOne({name,email})
    })
    .then(userdata => {
      if(userdata){
        token = generateToken(payloadjwt)
        res.status(200).send({token, googleUserName})
      }
      else{
        res.redirect(`/users/googleRegister?name=${payloadjwt.name}&email=${payloadjwt.email}&picture=${payloadjwt.picture}`)
      }
    })
    .catch(next)
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
    .catch(next)
  }
}

module.exports = UserController