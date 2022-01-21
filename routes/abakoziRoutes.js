var express = require('express');
var router = express.Router();
const umukoziControl=require("../controllers/umukoziControllers")
const checker=require("../middle/check")
router.get('/',umukoziControl.getAllEmployees )

module.exports=router;