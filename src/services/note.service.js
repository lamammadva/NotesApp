const {Note}= require("../models")

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
const noteUpdate = async (id,params)=>{
    const data = await noteById(id)
    const updateData = await data.update(params)
    return updateData


}
const noteDelete = async (id)=>{
    const data = await noteById(id)
    const deleteData = await data.destroy()
    return deleteData
}



module.exports ={
    noteCreate,noteAll,noteById,noteUpdate,noteDelete
}