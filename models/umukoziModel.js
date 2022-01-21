var mongoose=require('mongoose')
var Schema =mongoose.Schema;

var umukoziSchema=new Schema({
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

var Umukozi=mongoose.model('umukozi',umukoziSchema)
module.exports = Umukozi;