var mongoose=require('mongoose')
var Schema =mongoose.Schema;

var userSchema=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String,
         required: true,
          unique:true,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ },
    password: { type: String, required: true },
    status: { 
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
     }
});

var User = mongoose.model('user', userSchema);
module.exports = User;