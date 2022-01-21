var express = require('express');
var router = express.Router();
const umukoziControl=require("../controllers/umukoziControllers")
const checker=require("../middle/check")
router.get('/',umukoziControl.getAllEmployees )
router.post("/new",umukoziControl.newEmployee)
router.get('/:id', umukoziControl.getById)
router.put("/:id",umukoziControl.update)

module.exports=router;