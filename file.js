const fs = require("fs");
// syncrounous call......Blocking request
fs.writeFileSync('./test.txt','Hey beteees');
//non syncrounous call or async .....Non Blocking Request
fs.writeFile('./test.txt','Hey beteees async',(err)=>{});

//sync ki ke return value hoti hai toh usko kisi variable mein store kara 
//ke print kar sakte ho but without sync wale ko nhi

//const result = fs.readFileSync('./contact.txt',"utf-8");
//console.log(result)

//async wala function expect krta hai ki tum usko ek call back
//function do jisme error aur data milega

//fs.readFile('./contact.txt',"utf-8",(err,data)=>{
 //if (err){

  //  console.log("ERROR",err);
//  }
//else{

  //  console.log(result);
//}

//});
// file append karna mltb ki usko change karna

//fs.appendFileSync('./contact.txt',new Date().getDate().toLocaleString());

//fs.appendFileSync("./constact.txt",`hey bhau aaj date hai ?${Date.now()}\n`);
//fs.cpSync('./constact.txt','./cpy.txt');
//fs.unlinkSync('./cpy.txt') delete a file

//console.log(fs.statSync('./test.txt').isFile()); // to gegt stats of a file and bool the file ?

fs.mkdirSync("my-docs/a/b",{recursive:true});

