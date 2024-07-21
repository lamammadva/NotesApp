const {Note}= require("../models")

const noteCreate= async (params) => {
    const {title, description,user_id} = params
    const data = await Note.create({
        title,
        description,
        user_id
    })
    return data
    


}
const noteAll = async ()=>{
    const data = await Note.findAll()
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