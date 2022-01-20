const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://km:km@koliva.0kx6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
    console.log(err);
})
