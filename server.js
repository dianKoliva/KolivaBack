const express=require('express')
const app=express();
const bodyParser = require("body-parser");
require('dotenv').config();
const port=400;


app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})