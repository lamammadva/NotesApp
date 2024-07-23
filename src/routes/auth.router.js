const express = require('express')
const router = express.Router()
const {authController} = require("../controllers/index")

router.post("/login", authController.signIn)

module.exports = router