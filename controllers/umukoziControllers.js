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


    Umukozi.find({nimero:req.body.nimero})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({message:"Employee with such a number exists"})
        }
        else{
            
                    const employee = new Umukozi({
        
                        _id:new mongoose.Types.ObjectId(),
                        amazina:req.body.amazina,
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

exports.getById=(req, res,next) => {

  

    const user= Umukozi.findById(req.params.id)
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
            message:"Umukozi mushaka ntabashize kuboneka"
        })
    }

)
    
}


exports.update=(req,res,next)=>{
    var id=req.params.id;


    const user= Umukozi.findById(req.params.id)
    .exec()
    .then(
        
        resp=>{
                let updateOps={};
    const body=req.body;
 
    for(const ops in body){
        updateOps[ops]=body[ops];
    }
    
 
    Umukozi.updateOne({_id:id}, {$set:updateOps})
    .exec()
    .then( resp=>{
       res.status(201).json(resp) ;
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

 exports.disable=(req,res,next)=>{
    var id=req.params.id;


    const user= Umukozi.findById(req.params.id)
    .exec()
    .then(
        
        resp=>{
 
    Umukozi.updateOne({_id:id}, {status:'inactive'})
    .exec()
    .then( resp=>{
       res.status(200).json({message:"Employee inactivated"}) ;
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


//  exports.deleteById=(req,res,next)=>{


//     const user= Umukozi.findById(req.params.id)
//     .exec()
//     .then(
//         ans=>{
//               let id=req.params.id;

//     Umukozi.remove({
//         _id:id
//     })
//     .exec()
//     .then(
//         result=>{
//             res.status(200).json({message:"deleted"})
//         }
       
//     )
//     .catch(
//         err=>{
   
//             res.status(500).json({
//                 error:err
//             })
//         }

//     )
//         }
// )
// .catch(
//     err=>{
//         res.status(404).json({
//            error:"Umukozi not found"
//         })
//     }

// )



  
// }
