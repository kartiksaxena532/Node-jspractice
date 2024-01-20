const express = require('express');
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();

const PORT = 8000;
//schema
mongoose.connect("mongodb://localhost:27017/kartikapp")
.then (()=>console.log("MongoDb Connect Ho Gya"))
.catch(err=>console.log("error hai bhai",err));





//model




//middleware
app.use(express.urlencoded({extended:false})); //like a plugin "MIDDLEWARE"
// increasing usability for the route path if changed in future.











app.listen(PORT,()=>console.log(`heyy server has been started at ${PORT}`));
