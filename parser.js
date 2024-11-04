const express = require('express');
const app = express();
const bodyParser=require('body-parser');//middleware function

app.use(function(req,res,next){
    bodyParser.urlencoded({extended:false})
   if(err){
    console.log(err)
   }
   console.log(bodyParser)
    next()
})

