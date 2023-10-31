const express = require('express');
const data = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;



// increasing usability for the route path if changed in future.

app
.route("/api/data/:id")
.get((req,res)=>{

    const id = Number(req.params.id);
    const person = data.find((person)=>person.id === id);
    return res.json(person);
})

.post((req,res)=>{
  
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
