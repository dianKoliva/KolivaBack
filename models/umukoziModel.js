var mongoose=require('mongoose')
var Schema =mongoose.Schema;

var Umukozi=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    amazina: { type: String, required: true },
    nimero:{type:Number,required:true, unique:true,},
    umushahara:{type:Number,required:true},
    created_at:{type:Date,required:true},
    deactivation_date:{type:Date,required:false},
    status: { 
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
     }

})

var Umukozi=mongoose.model('Umukozi',Umukozi)
module.exports = Umukozi;