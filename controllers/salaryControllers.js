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

exports.getById=(req, res,next) => {

  

    const user= Umushahara.findById(req.params.id)
    .exec()
    .then(
        ans=>{
            res.json({
                umukozi:ans
            })
        }
)
.catch(
    err=>{
        res.status(500).json({
            message:"Doesn't exist"
        })
    }

)
    
}

exports.update=(req,res,next)=>{
    var id=req.params.id;


    const user= Umushahara.findById(req.params.id)
    .exec()
    .then(
        
        resp=>{
                let updateOps={};
    const body=req.body;
 
    for(const ops in body){
        updateOps[ops]=body[ops];
    }
    
 
    Umushahara.updateOne({_id:id}, {$set:updateOps})
    .exec()
    .then( resp=>{
       res.status(201).json({message:"updated"}) ;
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
        
)
.catch(
    err=>{

        res.status(500).json({
            message:"Umukozi ntabwo abashije kubonek"
        })
    }
)

        



 }

 exports.deleteAll=(req,res,next)=>{

    Umushahara.remove({})
    .exec()
    .then(
        ()=>{
res.status(200).json({message:"all deleted"})
        }
    )
    .catch((err)=>{
        res.status(500).json({err:err})
    })
  
}
