const express = require('express');
const data = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;

app.get("/data",(req,res)=>{
    const html =`
    <ul>
    ${data.map((data)=>`<li>${data.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
        });

app.get("/api/data",(req,res)=>{

return res.json(data);

});

app.get("/api/data/:id",(req,res)=>{

    const id = Number(req.params.id);
    const person = data.find((person)=>person.id === id);
    return res.json(person);
});


//routes

app.listen(PORT,()=>console.log(`heyy server has been started at ${PORT}`));
