var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

const userControl=require("../controllers/userControllers.js")
router.post('/signup',userControl.signUp )
router.get('/',userControl.getAllUsers )
router.post("/login",userControl.login)
module.exports = router;