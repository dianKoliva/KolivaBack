const express=require('express')
const app=express();
const port=400;



app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})