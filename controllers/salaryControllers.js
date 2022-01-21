var Umushahara = require('../models/umushaharaModel');
var Abakozi =require("../models/umukoziModel");
const bcrypt = require('bcrypt')
const mongoose= require('mongoose');
const jwt=require("jsonwebtoken");
const Umukozi = require('../models/umukoziModel');


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

exports.newSalary=(req, res,next) => {


    Umushahara.find({umukozi_id:req.body.umukozi_id})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({message:"Employee salary exists"})
        }
        else{
           var found= Umukozi.find({_id:req.body.umukozi_id})
            if(found.length>=1){
                const employee = new Umushahara({
        
                    umukozi_id:req.body.umukozi_id,
                });
                employee
                .save()
                .then(result=>{
                    res.status(201).json({
                        message:"Salary Created"
                    })
                   
                })
                .catch(
                    err=>{
                        
                        res.status(500).json({
                            error:err
                        })
                    }
    
                ) 
            
            
                }
                else{
                    res.status(400).json({
                        message:"employee to create salary for doesn't exist"
                    })
                }       
                
        
            
        }
    })


 
  

}

