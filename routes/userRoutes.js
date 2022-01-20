var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

const userControl=require("../controllers/userControllers.js")
router.post('/signup',userControl.signUp )

module.exports = router;