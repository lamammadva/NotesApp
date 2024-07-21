const User = require("../models/User")

const createUsers = async(params)=>{
    const {username,password} = params
    let existsUser = await findUserByUsername(username)
    if(existsUser) throw new Error('user already exists')
    let user = await User.create({
        username,
        password

    })
    return user
    


}
const findUserByUsername = async(username)=>{
    let user = await User.findOne({where:{username}})
    return user

}
const findAll = async()=>{
    const user = await User.findAll()
    return user
}
module.exports = {
    createUsers,
    findUserByUsername,
    findAll

}