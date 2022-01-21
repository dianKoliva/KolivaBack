var Umukozi = require('../models/umukoziModel');
const bcrypt = require('bcrypt')
const mongoose= require('mongoose');
const jwt=require("jsonwebtoken");
exports.getAllEmployees=(req, res,next) => {


    const abakozi= Umukozi.find()
    .exec()
    .then(
        ans=>{
                res.json({
                    abakozi:ans
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