const sequelize = require('../db');

const User = require("./User.model")
const  Note = require("./Notes.model")

User.hasMany(Note, { foreignKey: 'userId', as: 'notes' });
Note.belongsTo(User, { foreignKey: 'userId', as: 'user' });



module.exports = {
    User, Note
    
}