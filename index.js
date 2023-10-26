const http = require("http"); // doesnt parse res.url hence cannot diffrenciate between path and query parameters.
const fs = require("fs");
const url = require("url"); // import package for url parsing
const express = require('express');

const app = express();

app.get('/',(req,res)=>{   
    return res.end("this is home page");
});

app.get('/about',(req,res)=>{   
    return res.end("this is about page");
});
// parse a query string and extract the search parameter

const myServer = http.createServer(app);
myServer.listen("8000",()=>{console.log("Server Shru Hogaya")})