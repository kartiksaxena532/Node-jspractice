const express = require('express');
const router = express.Routerouter();

router.get("/api/users",async(req,res)=>{ // route ko sahi se likhna bhai vimpp
    const allDbusers=await kartik.find({});
    res.setHeader("X-myname","Kartik saxena");
    //Always use X in custom headers to make the agent realize that it is a custim header 
    //not a default header good practice
    return res.json(allDbusers);

})
router.post("/api/users",async(req,res)=>{ // route ko sahi se likhna bhai vimpp
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







router.get("/users",async(req,res)=>{ // route ko sahi se likhna bhai vimpp
    const allDbusers=await kartik.find({});
const html=`
<ol>
${allDbusers.map((user)=>`<li>${user.first_name}-${user.email}</li>`).join("")}
</ol>
`;
res.send(html);

});
//routes







router.route("/api/users/:id") // route ko sahi se likhna bhai vimpp
.get(async(req,res)=>{
    const user = await kartik.findById(req.params.id);
    if(!user){
        return res.status(404).json({msg:"user not found"});
    }
    return res.json(user);
})
.delete(async(req,res)=>{
    const id = req.params.id;
    const user = await kartik.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({msg:"user not found"});
    }
    return res.json(user);
})
.patch(async(req,res)=>{
const id = req.params.id;
const user = await kartik.findByIdAndUpdate(id,{last_name:"Changed"});

if (!user){
    return res.status(404).json({msg:"not patch can be made as th user do not exist"})
}
return res.json(user);

})

