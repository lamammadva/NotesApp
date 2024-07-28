const { appError, NotfoundError, validationError } = require("../errors")
const { checkPassword } = require("../utils/bcrypt")
const { encodePayload } = require("../utils/jwt.util")
const { findByUsername: findUserByUsername } = require("./user.service")

const login = async (params)=>{
    const {username,password} = params || {}
    let user = await findUserByUsername(username)
    if(!user) {
        throw new  NotfoundError("username not found")
    }
    user = user.toJSON()
    let check = await checkPassword(password, user.password)
    if(!check){
        throw new validationError('password incorrect')
    }
    const payload = {
        userId:user.id
    }
    const token = encodePayload(payload)
    delete user.password
    return {
            user,
            token
            
    }

}
module.exports = {
    login
}