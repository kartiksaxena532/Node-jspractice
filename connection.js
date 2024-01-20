const mongoose = require("mongoose");

//mogoose laga ke ek file mein mongoose wale fxn ko daal diya 
//ek async function mein jiske export maar diya bhidu
//connection url ko hata ke alag se daal diya ab 
//connectMongodb fxn ko export karna hai

async function connectMongodb(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDb Connect Ho Gya"))
    .catch((err) => console.log("error hai bhai", err));
}

module.exports ={ connectMongodb,};