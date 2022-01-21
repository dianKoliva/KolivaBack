var express = require('express');
var router = express.Router();
const salaryControl=require("../controllers/salaryControllers")
const checker=require("../middle/check")


router.get('/',salaryControl.getAllSalaries )
router.get('/:id',salaryControl.getById )
router.post('/new',salaryControl.newSalary )
router.put('/update/:id',salaryControl.update)
router.delete('/delete/:id',salaryControl.deleteAll)

module.exports=router;