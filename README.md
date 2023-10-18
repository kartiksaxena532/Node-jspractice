Node -v in command prompt will give you the node version

[dir] will give you all the directories present in the location

[cd desktop] will make to to the desktop location and [..]  will help you go back to folder

Entering the node is using “node” command 

Exiting the node terminal we use .exit or ctrl+D and crtl+k to clear the console.

Hitting tab can make you see all the global variables that you can use in node.

For a specific data type properties we can use e.g: String.[tab]

By using underscore you can use previous result to the new command or operation.

- `node -v`: Returns the version of Node.js installed
- `dir`: Lists all directories in the current location
- `cd <directory>`: Changes the current directory to the specified directory
- `node`: Enters the Node.js terminal
- `.exit` or `ctrl+D`: Exits the Node.js terminal
- `ctrl+k`: Clears the console
- `String.<tab>`: Displays a list of properties for the `String` data type
- `_`: Stores the previous result to be used in a new command or operation

# Node js is a runtime environment for javascript :

<aside>
💡 Each Browser has its own javascript engine like:

chrome has V8 engine

firefox has spidermonkey

safari has apple js engine

</aside>

---

so abhi tak js was used by browsers and using there engines

So ryan made js to intergrate with CPP to make it NODE JS now you can use it outiside the browser and can talk to a native machine using this.

Node releases its stable long tern support and current support on the basis of numbering odd as current unstable support but even number as LTS a long term support version of node 

like 18.9.0 is a LTS version but 21.07.06 is current unstable support ehich you can use to test out various new features added

to run a file use NODE HELLO.JS OR just hello kyuki node sirf js files ko run karta hai

Node does not support the ui functions of the js like 

console.log(window)

alert(”hello”)

cause all ui elemets was removed as it was made for servers to generate.

use npm init to make a template file of package.json  jo ki humari ek configuration file hoti hai 

jisme saara project se related data hota hai 

ab usme scripts mien jaake khud scripts ko set kar ssakte hai ki konsa commmand kya karega

like “start” : node hello.js
