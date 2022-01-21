var express = require('express');
var router = express.Router();
const salaryControl=require("../controllers/salaryControllers")
const checker=require("../middle/check")


router.get('/',salaryControl.getAllSalaries )

module.exports=router;