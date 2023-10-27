const fs = require("fs")
//Async call kabhi bhi kisi task ko block nhi karti hai 
const os = require("os");
// os provides the information of the computer

console.log(os.cpus().length);
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

//value of threads in a threadpool is fully dependent on the CPU cores
// for a 8 core the cpu value would be 8 in pool
