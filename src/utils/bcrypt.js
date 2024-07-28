const bcrypt = require('bcrypt');

const hasPassword = async(password)=>{
    return  bcrypt.hash(password, 10); 
}
const checkPassword = async(password, hashedPassword)=>{
    return bcrypt.compare(password, hashedPassword); 
}

module.exports = {
    hasPassword,
    checkPassword
}