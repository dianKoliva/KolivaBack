const express=require('express')
const app=express();
const bodyParser = require("body-parser");
require('dotenv').config();
var users = require("./routes/userRoutes.js");
require("./db/connect")
const morgan =require( "morgan")


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use('/km/users', users);

app.listen(process.env.port,()=>{
    console.log(`Listening on port ${process.env.port}`);
})