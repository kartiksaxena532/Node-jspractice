const express = require('express');
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;

app.use(express.urlencoded({extended:false})); //like a plugin "MIDDLEWARE"
// increasing usability for the route path if changed in future.

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
})

app.post("/api/users",(req,res)=>{
    const body = req.body;
    ///console.log("Body",body) //read notion docs
    users.push({...body,id: users.length +1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        return res.json({status : "success" , id :users.length});
    })
    ;
});
//routes

app.listen(PORT,()=>console.log(`heyy server has been started at ${PORT}`));
