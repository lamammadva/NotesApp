const express = require("express")
const router = express.Router()
const userRouter = require("./user.router")
const noteRouter = require("./note.router")
const { authMiddleware } = require('../middleware/auth.middleware')


router.use("/users",userRouter)
router.use("/notes",authMiddleware, noteRouter)

module.exports = router