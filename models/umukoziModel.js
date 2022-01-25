var mongoose=require('mongoose')
var Schema =mongoose.Schema;
const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

var umukoziSchema=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    amazina: { type: String, required: true },
    nimero:{type: String,required:true},
    umushahara:{type:Number,required:true},
    created_at:{type:Date,
    default: date
    },
    deactivation_date:{type:Date,required:false},
    status: { 
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
     }

})

var Umukozi=mongoose.model('umukozi',umukoziSchema)
module.exports = Umukozi;