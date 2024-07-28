    const expesse = require('express')
    const router = expesse.Router()
    const {noteController} = require("../controllers")
    const { validationMiddleware } = require("../middleware/validation.middleware")
    const { notesSchema } = require("../schema")


    router.get("/",noteController.noteAll)
    router.get("/:id", noteController.noteById)
    router.post("/",validationMiddleware(notesSchema.notes), noteController.noteCreate)
    router.put("/:id",noteController.noteUpdate)
    router.delete("/:id",noteController.noteDelete)

    module.exports = router