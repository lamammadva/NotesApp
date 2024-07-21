const  {userServices}  = require("../services/index")

const createUser = async(req,res)=>{
    try {
        const user  = await userServices.createUsers(req.body)
        console.log(user); 
        res.json({
            status:true,
            message:"User created",
            user
        })
    } catch (err) {
        res.status(409).json({
            message:err?.message,
        })
    }
   
}
const findAll = async(req,res)=>{
    try {
        const users = await userServices.findAll()
        res.json({users})
    } catch (error) {
        
        res.status(500).json({
            message:error?.message,
        })
    }
}
module.exports = {
    createUser,
    findAll

}