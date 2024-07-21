const { DataTypes } = require("sequelize")
const sequelize = require("../db")
const User = require("./User")

const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id"
    }
  }
})
module.exports = Note


