const express = require('express');

const app = express();

const port = 8000;

//routes

app.listen(port,()=>console.log(`heyy server has been started at ${port}`));
