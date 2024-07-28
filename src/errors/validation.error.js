const appError = require("./app.error")

class validationError extends appError {
    constructor(message) {
        super(message, 401);
    }


}   
module.exports = validationError