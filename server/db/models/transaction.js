const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  billingAddress: {
    type: Sequelize.TEXT,
    allowNull: false
},
  shippingAddress: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  cardType: {
      type: Sequelize.STRING,
      allowNull: false
  },
  cardNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  expirationDate: {
      type: Sequelize.STRING,
      allowNull: false
  },
  csv: {
    type: Sequelize.INTEGER,
      allowNull: false
  }
})


module.exports = Transaction
