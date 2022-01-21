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

exports.newSalary=(req, res,next) => {


    Umushahara.find({umukozi_id:req.body.umukozi_id})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({message:"Employee salary exists"})
        }
        else{
            
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
    })


 
  

}