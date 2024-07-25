const {Note}= require("../models")


const findUserNote = async (noteId,userId) => {
    const note = await Note.findOne({where:{noteId,userId}})
    return note

}

const noteCreate= async (params) => {
    const {title, description,userId} = params
    console.log(params);
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
        throw new Error(`not found note with ${id}`)
    }
    return data

}
const noteUpdate = async (params)=>{
    const {noteId,userId,title,description} = params

    const data = await noteById(id)
    const updateData = await data.update(params)
    return updateData


}
const noteDelete = async (params)=>{
    const {noteId,userId} = params
    let data = await findUserNote(noteId,userId)
    if (!data) throw new Error("Note is not found");
    await Note.destroy({where:{id:data.id}})
    return true
}



module.exports ={
    noteCreate,noteAll,noteById,noteUpdate,noteDelete,findUserNote
}