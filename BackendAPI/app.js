var express = require("express");
var app =express();
var pdfExtract= require("./controller/pdf-text-extract");
var bodyParser=require('body-parser');
var cors=require('cors');
app.listen(3000,()=>{
    console.log("Started on port 3000")
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req,res,next){
    res.header("Access-Control-Allow-Orgin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/extract-text-pdf',pdfExtract);
