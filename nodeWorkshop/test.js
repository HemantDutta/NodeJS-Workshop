let http = require('http'); //Importing http package
let port = 3000; //Defining port number
let host = '10.4.219.193' //my ip

//install npm i fs and npm i express after going home
let fs = require('fs');
let express = require('express');

let server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    // res.end("<h1 style='color:green'>Hemant Dutta</h1>")
    let url = req.url;
    if(url=="/"){
        fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data);
        });
    }
    else if(url=="/about"){
        fs.readFile(path.join(__dirname,'about.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data);
        });
    }
}).listen(port, host, ()=>{
    console.log(`Server is listening at ${port}`);
});


