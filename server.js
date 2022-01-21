const express=require('express')
const app=express();
const bodyParser = require("body-parser");
require('dotenv').config();
var users = require("./routes/userRoutes.js");
require("./db/connect")
const morgan =require( "morgan")
const abakozi =require("./routes/abakoziRoutes")
const salary=require("./routes/salaryRoutes")


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'))
app.use(bodyParser.json());

app.use('/km/users', users);
app.use('/km/abakozi',abakozi);
app.use("/km/salary",salary)




app.listen(process.env.port,()=>{
    console.log(`Listening on port ${process.env.port}`);

})
