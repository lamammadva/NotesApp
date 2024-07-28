const { NotfoundError } = require("../errors")
const {Note}= require("../models")


const findUserNote = async (noteId,userId) => {
    const note = await Note.findOne({where:{id:noteId,userId}})
    return note

}

const noteCreate= async (params) => {
    const {title, description,userId} = params
    const data = await Note.create({
        title,
        description,
        userId
    })
    return data
    


}
const noteAll = async (userId)=>{
    const data = await Note.findAll({where: {userId}})
    return data
}
const noteById = async (id)=>{
    const data  = await Note.findByPk(id)
    if(!data){
        throw new NotfoundError(`not found note with ${id}`)
    }
    return data

}
const noteUpdate = async (params)=>{
    const {noteId,userId,title,description} = params
    let user = await findUserNote(noteId,userId)
    const updateData = await Note.update({title,description},{where:{id:user.id}})
    return updateData


}
const noteDelete = async (params)=>{
    const {noteId,userId} = params
    let data = await findUserNote(noteId,userId)
    if (!data) throw new NotfoundError ("Note is not found");
    await Note.destroy({where:{id:data.id}})
    return true
}



module.exports ={
    noteCreate,noteAll,noteById,noteUpdate,noteDelete,findUserNote
}