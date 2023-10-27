//all math functions here
//==============================================
/*
so abhi tak js was used by browsers and using there engines

So ryan made js to intergrate with CPP to make it NODE JS now you can use 
it outiside the browser and can talk to a native machine using this.

Node releases its stable long tern support and current support on
 the basis of numbering odd as current unstable support but even number as 
 LTS a long term support version of node 

like 18.9.0 is a LTS version but 21.07.06 is current unstable support which
 you can use to test out various new features added

to run a file use NODE HELLO.JS OR just hello kyuki node sirf js files 
ko run karta hai

Node does not support the ui functions of the js like 

console.log(window)

alert(”hello”)

cause all ui elemets was removed as it was made for servers to generate.

use npm init to make a template file of package.json  jo ki humari 
ek configuration file hoti hai 

jisme saara project se related data hota hai 

ab usme scripts mien jaake khud scripts ko set kar ssakte hai
 ki konsa commmand kya karega

like “start” : node hello.js


*/

function add(a,b){

return a + b ;

}
function sub(a,b){

    return a - b ;
    
    }

module.exports= {add, sub} ;