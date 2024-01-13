const express = require('express');
const fs = require("fs");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;
//schema
const userSchema = new mongoose.Schema({
first_name:{
    type:String,
    unique:true,
    required:true,
},
last_name:{
type:String,
required:true,
},
id:{
required:true,
},
});
//model

const kartik = mongoose.model("user",userSchema);

//middleware
app.use(express.urlencoded({extended:false})); //like a plugin "MIDDLEWARE"
// increasing usability for the route path if changed in future.

app.get("/api/users/:id",(req,res)=>{
    res.setHeader("X-myname","Kartik saxena");
    //Always use X in custom headers to make the agent realize that it is a custim header 
    //not a default header good practice
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);

    if(!user){
        return res.status(404).json ({error:"user does not exist"});
    }
    return res.json(user);
})

app.post("/api/users",(req,res)=>{
    const body = req.body;
    if(!body.first_name || !body.last_name ||!body.email ||!body.ip_address || !body.gender){
        return res.status(400).json({msg: "All feilds are necessary.."});

    }
    ///console.log("Body",body) //read notion docs
    users.push({...body,id: users.length +1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status : "success" , id :users.length}); //201 is used when new user is created
    })
    ;
});
//routes

app.listen(PORT,()=>console.log(`heyy server has been started at ${PORT}`));
