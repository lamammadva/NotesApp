    const expesse = require('express')
    const router = expesse.Router()
    const {noteController} = require("../controllers")


    router.get("/",noteController.noteAll)
    router.get("/:id",noteController.noteById)
    router.post("/",noteController.noteCreate)
    router.put("/:id",noteController.noteUpdate)
    router.delete("/:id",noteController.noteDelete)

    module.exports = router