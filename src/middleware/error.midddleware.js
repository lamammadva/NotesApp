const { appError } = require("../errors");

const errorMiddleware = (error,req,res,next)=>{
    if (error instanceof appError)
    return res.status(error.statusCode).json({message: error.message});
    console.log(error);
    res.status(500).json({message: 'Internal Server Error'});
};

module.exports = {
    errorMiddleware
};