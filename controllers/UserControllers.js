var User = require('../models/userModel');
const bcrypt = require('bcrypt')
const mongoose= require('mongoose');

exports.getAllUsers=(req, res,next) => {


    const user= User.find()
    .exec()
    .then(
        ans=>{
                res.json({
                    users:ans
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

exports.signUp=(req, res,next) => {


    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({message:"Email exists"})
        }
        else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{

                if(err){
        
                    return res.status(500).json({
                        error:err
                    })
                }
                else{
                    const user = new User({
        
                        _id:new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        name:req.body.name,
                        password:hash
                    });
                    user
                    .save()
                    .then(result=>{
                        res.status(201).json({
                            message:"User Created"
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
    })


 
  

}