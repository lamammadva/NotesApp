const { DataTypes } = require("sequelize")
const sequelize = require("../db")

const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  }
 
})


module.exports = Note


