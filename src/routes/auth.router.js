const express = require('express')
const router = express.Router()
const {authController} = require("../controllers/index")
const {validationMiddleware}  = require('../middleware/validation.middleware')
const {autSchema} = require("../schema/index")

router.post("/login" ,validationMiddleware(autSchema.login), authController.signIn)

module.exports = router