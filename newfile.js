const fs = require("fs")
//Async call kabhi bhi kisi task ko block nhi karti hai 

ex: 

console.log("1");

const result = fs.readFileSync('./test.txt',"utf-8");
console.log(result)

console.log("2");
// this will give output of 1 result 2

//but in async the output would be 1 2 result kyuki 
console.log("1");

fs.readFile('./text.txt',"utf-8",(err,result)=>{
console.log(result);
});

console.log('2');