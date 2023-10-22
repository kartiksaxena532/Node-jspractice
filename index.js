const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{

    const log= `${Date.now()}:${req.url} New Request At this time\n`; // req.url path dega ki request kahan kahan pe hui
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.ur){ //applying multi routes on req.url
            case "/": //home page
                res.end("hello from server again");
                break;
            case "/about":
                res.end("About Page");
                break;
            case "/contact":
                res.end("Contact Page");
                break;
            default:
                res.end("404 not found");
        }
        ;
    });
    //console.log(req); //req.Headers can also be used
   // res.end("hello sab sahi haina")
});

myServer.listen("8000",()=>{console.log("Server Shru Hogaya")})