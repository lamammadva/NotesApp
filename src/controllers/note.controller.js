const {noteServices} = require("../services")

const noteAll = async (req, res) => {
    try {
        const data = await noteServices.noteAll()
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
    try {
        const data = await noteServices.noteCreate(req.body)
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
    const {id} = req.params
    try {
        const data = await noteServices.noteUpdate(id, req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json({
            message:error?.message
        })
    }
}
const noteDelete = async (req, res) => {
    const {id} = req.params
    try {
        await  noteServices.noteDelete(id)
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