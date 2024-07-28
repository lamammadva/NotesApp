const { appError } = require("../errors")
const User = require("../models/User.model")
const { hasPassword } = require("../utils/bcrypt")

const createUsers = async(params)=>{
    const {username,password} = params
    let existsUser = await findByUsername(username)
    let hash = await hasPassword(password)
    if(existsUser) throw new appError('user already exists',409)
    let user = await User.create({
        username,
        password:hash

    })
    return user
    


}
const findByUsername = async(username)=>{
    let user = await User.findOne({where:{username}})
    return user
    
}
const findById = async(id)=>{
    const user = await User.findByPk(id)
    return user


}

const findAll = async()=>{
    const user = await User.findAll()
    return user
}
module.exports = {
    createUsers,
    findByUsername,
    findAll,
    findById


}