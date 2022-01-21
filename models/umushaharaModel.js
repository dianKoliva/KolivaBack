var mongoose=require('mongoose')
var Schema =mongoose.Schema;
var Umukozi =require("./userModel")

var umushaharaModel= new Schema({
 
    umukozi_id:{
        type:Schema.Types.ObjectId,
        ref:Umukozi
    },
    total_days:{
        type:Number,
        default:0,

    },
    ayogukata:{
        type:Number,
        default:0,
    },
    total_days:{
        type:Number,
        default:0
    }


})

var Umushahara= mongoose.model("umushahara",umushaharaModel);
module.exports=Umushahara;