function validationMiddleware(schema){
    return (req,res,next)=>{
        let result = schema.validate(req.body)
        console.log(result.error);
        if (result.error){
            const errorValidate = result.error.details?.[0]
            console.log(errorValidate);
            if(errorValidate.type === "string.min"){
                return res.status(400).json({status:false,message:`${errorValidate.context.label} min ${errorValidate.context.limit} simvol olmalidir`})
            }
            else {
                return res.status(400).json({status:false,message:errorValidate.message})
            }


        }
        next()
    }

} 

module.exports = {
    validationMiddleware
}