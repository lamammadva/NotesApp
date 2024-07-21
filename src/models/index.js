const sequelize = require('../db');

const User = require("./User")
const  Note = require("./Notes")

User.hasMany(Note, { foreignKey: 'userId', as: 'notes' });
Note.belongsTo(User, { foreignKey: 'userId', as: 'user' });



module.exports = {
    User, Note
    
}