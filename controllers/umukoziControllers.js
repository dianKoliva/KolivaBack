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


exports.newEmployee=(req, res,next) => {


    Umukozi.find({nimero:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({message:"Employee with such a number exists"})
        }
        else{
            
                    const employee = new Umukozi({
        
                        _id:new mongoose.Types.ObjectId(),
                        nimero:req.body.nimero,
                        umushahara:req.body.umushahara,
                        created_at:req.body.created_at,
                    });
                    employee
                    .save()
                    .then(result=>{
                        res.status(201).json({
                            message:"Employee Created"
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