const appError = require("./app.error");

class NotfoundError extends appError {
    constructor(message) {
        super(message, 404);
    }


}
module.exports = NotfoundError
