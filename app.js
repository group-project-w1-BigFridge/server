if(process.env.NODE_ENV === "development"){
  require('dotenv').config()
}

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routers')

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('Database connected')})
.catch(err => {console.log(err)})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('tiny'))

app.use('/', router)

app.listen(port, () => {
  console.log('App listen on port ' + port)
})