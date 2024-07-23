const User = require("../models/User.model")

const createUsers = async(params)=>{
    const {username,password} = params
    let existsUser = await findByUsername(username)
    if(existsUser) throw new Error('user already exists')
    let user = await User.create({
        username,
        password

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