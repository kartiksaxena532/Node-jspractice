const express = require('express');
const fs = require("fs");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const {connectMongodb} = require('./connection');
const app = express();
const PORT = 8000;
const {logReqRes} = require("./middlewares");

//connection 

connectMongodb("mongodb://localhost:27017/kartikapp");

//middleware
app.use(logReqRes("log.txt"));

app.use(express.urlencoded({extended:false})); //like a plugin "MIDDLEWARE"
// increasing usability for the route path if changed in future.


app.use("/user",userRouter); //routes ab yahan se hoke jaayenge

app.listen(PORT,()=>console.log(`heyy server has been started at ${PORT}`));
