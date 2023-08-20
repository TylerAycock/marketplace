const { Cart } = require('./models/cart')
const { User } = require('./models/user')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const generateToken = (info) => {
    return jwt.sign(
        {
            email: info.email,
            password: info.password
        },
        SECRET,
        {
            expiresIn: '24h'
        }
    )
}

module.exports = {
    addToCart: async (req, res) => {
        try {
            console.log(req.body)
            const { id: prodId, title, price, img } = req.body
            await Cart.create({ prodId, title, price, img })
            res.sendStatus(201)
        }
        catch (err) {
            console.log(err)
        }
    },
    getCartItems: async (req, res) => {
        try {
            console.log('sending cart')
            const cart = await Cart.findAll()
            res.status(200).send(cart)
        }
        catch (err) {
            console.log(err)
        }
    },
    deleteItem: async (req, res) => {
        try {
            let { id } = req.params
            // console.log(id)

            const deleteRows = await Cart.destroy({
                where: {
                    id: id
                }
            })
            if (deleteRows > 0) {
                console.log(`Successfully deleted cart with ID ${id}`);
            } else {
                console.log(`Cart with ID ${id} not found`);
            }
        }
        catch (err) {
            console.log(err)
        }
    },
    newUser: async (req, res) => {
        const { email } = req.body
        let foundEmail = await User.findOne({ where: { email: email } })
        if (foundEmail) {
            res.status(409).send('email already on file!')
        }
        try {
            let { fName, lName, email, password } = req.body
            console.log('new userNAme', fName)
            const hashedPass = await bcrypt.hash(password, 10)
            await User.create({ fName, lName, email, password: hashedPass })
            res.sendStatus(201)
        }
        catch (err) {
            console.log(err)
        }
    },
    loginUser: async (req,res) => {
        console.log(req.body)
        const {email, password} = req.body
        let foundUser = await User.findOne({where: {email: email}})
        if(!foundUser){
            return res.status(201).send(`this email is not in our records`)
        }
        try{
            if(await bcrypt.compare(password, foundUser.password )){
                let token = generateToken(req.body)
                console.log('token generated in controller file', token)
                res.status(200).send(token)
            }
        }
        catch (error){
            console.log('error in loginUser', error)
            res.sendStatus(201)
        }
    }
}