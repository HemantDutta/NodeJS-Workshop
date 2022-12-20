const http = require('http');
const {load} = require('./test1.js');
const express = require('express');
const app = express();
const port = 3003;
app.listen(port, ()=>console.log(`Server is waiting at ${port}`));
app.get('/user', (req,res)=>{
    res.send(load);
})