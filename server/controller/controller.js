const {Cart} = require('./models/cart')

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
    getCartItems: async (req,res) => {
        try{
            console.log('sending cart')
            const cart = await Cart.findAll()
            res.status(200).send(cart)
        }   
        catch (err){
            console.log(err)
        }
    }
}