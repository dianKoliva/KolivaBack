var Umushahara = require('../models/umushaharaModel');
const bcrypt = require('bcrypt')
const mongoose= require('mongoose');
const jwt=require("jsonwebtoken");


exports.getAllSalaries=(req, res,next) => {


    const user= Umushahara.find()
    .exec()
    .then(
        ans=>{
                res.json({
                    salaries:ans
                })
           
            
        }
    
)
.catch(
    err=>{
        
        res.status(500).json({
            error:err
        })
    }

)
    
}