const express = require("express")
const router = express.Router()
const userRouter = require("./user")
// const noteRouter = require("./note")


router.use("/users",userRouter)
// router.use("/notes", noteRouter)

module.exports = router