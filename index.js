const http = require("http"); // doesnt parse res.url hence cannot diffrenciate between path and query parameters.
const fs = require("fs");
const url = require("url"); // import package for url parsing
const myServer = http.createServer((req,res)=>{
    if (req.url === "/favicon.ico") return  res.end(); // this would generate an empty response for favicon
    
    const log= `${Date.now()}:${req.url} New Request At this time\n`; // req.url path dega ki request kahan kahan pe hui
    const myUrl = url.parse(req.url,true);//true means i want to use parsequery parameters
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){ //applying multi routes on req.url i.e path name
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
        };
    });
    //console.log(req); //req.Headers can also be used
   // res.end("hello sab sahi haina")
});

myServer.listen("8000",()=>{console.log("Server Shru Hogaya")})