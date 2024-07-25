const {noteServices} = require("../services")

const noteAll = async (req, res) => {
    const {user} = req
    try {
        const data = await noteServices.noteAll(user.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({error:"not found note"})
        
    }
}
const noteById = async (req, res) => {
    const {id} = req.params
    try {
        const  data = await noteServices.noteById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({message:error?.message})
        
    }
}
const noteCreate = async (req, res) => {
    const {user} = req
    const params = {...req.body, userId: user.id}
    try {
        const data = await noteServices.noteCreate(params)
        res.json({
            status:true,
            message:"Note created",
            data
        })
    } catch (error) {
        console.error("Error creating note:", error); 
        
    }
}
const noteUpdate = async (req, res) => {
    const {user} = req
    const params = {...req.body,noteid:req.params.id, userId: user.id}
    try {
        const data = await noteServices.noteUpdate(id, params)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({
            message:error?.message
        })
    }
}
const noteDelete = async (req, res) => {
    const {user} = req
    const params = {noteId:req.params.id, userId:user.id}
    try {
        await  noteServices.noteDelete(params)
        res.status(200).json("successfully")
    } catch (error) {
        res.status(409).json({
            message:error?.message
        })
        
    }
}

module.exports = {
    noteAll,
    noteById,
    noteCreate,
    noteUpdate,
    noteDelete
}