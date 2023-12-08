const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Inventory = sequelize.define('inventory',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  item_name: Sequelize.STRING,

  description: Sequelize.STRING,

  price: Sequelize.STRING,

  quantity: Sequelize.STRING,

});

module.exports = Inventory;