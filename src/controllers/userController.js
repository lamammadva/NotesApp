const { userServices } = require("../services/index")

const createUser = async (req, res, next) => {
    try {
        const user = await userServices.createUsers(req.body)
        console.log(user);
        res.json({
            status: true,
            message: "User created",
            user
        })
    } catch (error) {
        next(error)
    }


}
const findAll = async (req, res,next) => {
    try {
        const users = await userServices.findAll()
        res.json({ users })
    } catch (error) {
        next(error)
    }


}
module.exports = {
    createUser,
    findAll

}