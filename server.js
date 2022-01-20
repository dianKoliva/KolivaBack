const express=require('express')
const app=express();
const bodyParser = require("body-parser");
require('dotenv').config();
var users = require("./routes/userRoutes.js");
require("./db/connect")


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/km/users', users);

app.listen(()=>{
    console.log(`Listening on port ${process.env.port}`);
})