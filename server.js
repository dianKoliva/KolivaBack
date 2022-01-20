const express=require('express')
const app=express();
const bodyParser = require("body-parser");
require('dotenv').config();
require("./db/connect")


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.listen(()=>{
    console.log(`Listening on port ${process.env.port}`);
})