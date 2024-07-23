
const { userServices } = require("../services")
const { decodePayload } = require("../utils/jwt.util")

const authMiddleware = async (req,res, next )=>{
    let token = req.headers.authorization
    if(!token?.includes("Bearer")) {
        return res.status(401).json({msg: "Token is not define"})
    }
    token  = token.split(' ')[1]
    const result = decodePayload(token)


    if(!result?.userId){
        return res.status(401).json({msg: "Token is invalid"})
    }
    const user =  await userServices.findById(result.userId)
    if(!user){
        return res.status(401).json({msg: "User not found"})

    }
    req.user= user
    next()

}
module.exports = {
    authMiddleware
}