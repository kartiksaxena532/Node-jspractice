const express = require('express');
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();

const PORT = 8000;
//schema
mongoose.connect("mongodb://localhost:27017/kartikapp")
.then (()=>console.log("MongoDb Connect Ho Gya"))
.catch(err=>console.log("error hai bhai",err));

const userSchema = new mongoose.Schema({
first_name:{
    type: String,
    required: true,
},
last_name:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
    unique:true,
},
job_title:{
    type:String,
    required: true,
},
gender:{
    type:String,
}
});

//model

const kartik = mongoose.model("user",userSchema);


//middleware
app.use(express.urlencoded({extended:false})); //like a plugin "MIDDLEWARE"
// increasing usability for the route path if changed in future.

app.get("/api/users",async(req,res)=>{
    const allDbusers=await kartik.find({});
    res.setHeader("X-myname","Kartik saxena");
    //Always use X in custom headers to make the agent realize that it is a custim header 
    //not a default header good practice
    return res.json(allDbusers);

})

app.post("/api/users",async(req,res)=>{
    const body = req.body;
    if(!body.first_name || !body.last_name ||!body.email ||!body.job_title || !body.gender){
        return res.status(400).json({msg: "All feilds are necessary.."});

    }
    ///console.log("Body",body) //read notion docs
    //creating a user (kartik) 
const result =  await kartik.create({
first_name: body.first_name,
last_name: body.last_name,
email: body.email,
job_title: body.job_title,
gender : body.gender,

    });
    console.result("result",result);
return res.status(201).json({msg:"success"});

});
app.get("/users",async(req,res)=>{
    const allDbusers=await kartik.find({});
const html=`
<ul>
${allDbusers.map((user)=>`<li>${user.first_name}-${user.email}</li>`).join("")}
</ul>
`;
res.send(html);

});
//routes

app.listen(PORT,()=>console.log(`heyy server has been started at ${PORT}`));
