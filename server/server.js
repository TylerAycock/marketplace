require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const { db } = require('./database')

const app = express()
app.use(express.json())
app.use(cors())

//db models
const {cart} = require('./controller/models/cart')

//controller file
const { addToCart, getCartItems } = require('./controller/controller')


//endpoints 
app.post('/cart', addToCart)
app.get('/cart', getCartItems)


//database sync
db.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`jamming on ${PORT} BROTHER`))
    })
    .catch(err => {
        console.log(err)
        console.log('error syncinc db')
    })