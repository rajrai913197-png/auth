const express = require("express")
const {UserSign,UserLogin}= require("../controller/UserController")
const router = express.Router()
router.post("/usersign",UserSign)
router.post("/userlogin",UserLogin)
module.exports = router