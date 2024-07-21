const express = require("express")
const router = express.Router()
const createUsers = require("../controllers/index")

router.post("/",createUsers.userController.createUser)
router.get("/",createUsers.userController.findAll)

module.exports = router