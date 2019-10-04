require('dotenv').config()
const jwt = require('jsonwebtoken')

function generateToken(payload){
  return jwt.sign(payload, process.env.SECRET)
}

function verifyToken(token){
  try {
    return jwt.verify(token,process.env.SECRET)
  } catch(err) {
    
  }
}

module.exports = {generateToken, verifyToken}