const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;

app.use(express.urlencoded({extended:false})); //like a plugin "MIDDLEWARE"


app
.route("/api/users")// increasing usability for the route path if changed in future.
.get((req,res)=>{

    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
})

.post((req,res)=>{
    const body = req.body;
    console.log("Body",body) //read notion docs
    return res.json({status : "pending"});
})
.patch((req,res)=>{
  
    return res.json({status : "pending"});
})
.delete((req,res)=>{
  
    return res.json({status : "pending"});
})
.put((req,res)=>{
  
    return res.json({status : "pending"});
})
//routes

app.listen(PORT,()=>console.log(`heyy server has been started at ${PORT}`));
