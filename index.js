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
                const username = myUrl.query.myname;
                res.end(`Hi ${username}`);
                break;
            case "/contact":
                res.end("Contact Page");
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Yeh rahe aapka search result for "+ search);
                break; 
            case "/health" :
                const named = myUrl.query.myname;
                const health = myUrl.query.calories;
                res.end(`hi ${named} `+"Your health is " + health);
                break;  
            case "/signup":
                if (req.method===GET){
                    res.end("the user is signing up");
                }   
                else if (req.method === POST) {
                    //DB QUERY
                    res.end("the user is signing in");
                }      
            default:
                res.end("404 not found");
        };
    });
    //console.log(req); //req.Headers can also be used
   // res.end("hello sab sahi haina")
});

myServer.listen("8000",()=>{console.log("Server Shru Hogaya")})