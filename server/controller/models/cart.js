const {DataTypes} = require('sequelize')
const {db} = require('../../database')

module.exports = {
    Cart: db.define('cart', {
        cartId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        prodId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}