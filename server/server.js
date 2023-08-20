require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const { db } = require('./database')

const app = express()
app.use(express.json())
app.use(cors())

//db models adn relationships
const {Cart} = require('./controller/models/cart')
const {User} = require('./controller/models/user')



//controller file
const { addToCart, getCartItems, deleteItem, newUser, loginUser } = require('./controller/controller')


//endpoints 
app.post('/cart', addToCart)
app.get('/cart', getCartItems)
app.delete('/cart/:id', deleteItem)
app.post('/register', newUser)
app.post('/login', loginUser)


//database sync
db.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`jamming on ${PORT} BROTHER`))
    })
    .catch(err => {
        console.log(err)
        console.log('error syncinc db')
    })