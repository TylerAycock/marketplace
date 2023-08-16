const {DataTypes} = require('sequelize')
const {db} = require('../../database')

module.exports = {
    Cart: db.define('cart', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
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