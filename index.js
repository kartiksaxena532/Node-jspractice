const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{

    const log= `${Date.now()}:New Request At this time\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        
        res.end("hello from server again");
    });
    //console.log(req); //req.Headers can also be used
   // res.end("hello sab sahi haina")
});

myServer.listen("8000",()=>{console.log("Server Shru Hogaya")})