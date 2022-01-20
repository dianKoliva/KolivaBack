const express=require('express')
const app=express();
const bodyParser = require("body-parser");
require('dotenv').config();
const port=400;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.listen(port,()=>{
    console.log(`Listening on port ${process.env.port}`);
})