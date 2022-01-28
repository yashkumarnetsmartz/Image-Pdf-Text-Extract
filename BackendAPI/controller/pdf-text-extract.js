
var extract = require('pdf-text-extract');
const express = require('express');
var router = express.Router();
const fs=require('fs');
const pdf=require('pdf-parse');
var multer  =   require('multer');
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
  });
  var upload = multer({ storage : storage});
   
router.post('/',upload.array('Pdf',50),function(req,res,next){
if(req)
{
 const body=req.files;
let dataBuffer=fs.readFileSync("./"+body[0].path);
pdf(dataBuffer).then(function(data){
const result={
    isSuccess:true,
    Data:data
}
    res.send(result);
    });
}
})
module.exports=router;
