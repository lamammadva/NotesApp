const { noteServices } = require("../services")

const noteAll = async (req, res) => {
    const { user } = req
    const data = await noteServices.noteAll(user.id)
    res.status(200).json(data)

}
const noteById = async (req, res,next) => {
    try {
        const { id } = req.params
        const data = await noteServices.noteById(id)
        res.status(200).json(data)
        
    } catch (error) {
        next(error)
    }

}
const noteCreate = async (req, res,next) => {
    const { user } = req
    try {
        const params = { ...req.body, userId: user.id }
        const data = await noteServices.noteCreate(params)
        res.json({
            status: true,
            message: "Note created",
            data
        })
        
    } catch (error) {
        next(error)
    }

}
const noteUpdate = async (req, res,next) => {
    const { user } = req
    try {
        const params = { ...req.body, noteId: req.params.id, userId: user.id }
        const data = await noteServices.noteUpdate(params)
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }

}
const noteDelete = async (req, res,next) => {
    const { user } = req
    const params = { noteId: req.params.id, userId: user.id }
    try {
        await noteServices.noteDelete(params)
        res.status(200).json("successfully")
    } catch (error) {
        next(error)

    }
}

module.exports = {
    noteAll,
    noteById,
    noteCreate,
    noteUpdate,
    noteDelete
}