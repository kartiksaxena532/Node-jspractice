const fs = require("fs");
// syncrounous call
fs.writeFileSync('./test.txt','Hey beteees');
//non syncrounous call or async
fs.writeFile('./test.txt','Hey beteees async',(err)=>{});

//sync ki ke return value hoti hai toh usko kisi variable mein store kara 
//ke print kar sakte ho but without sync wale ko nhi

const result = fs.readFileSync('./contact.txt',"utf-8");
console.log(result)