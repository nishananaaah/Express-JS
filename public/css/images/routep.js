const express = require('express');
const app = express();
const path = require('path')
const port =3000;

app.get('/product',(req,res)=>{
    res.send("All Product")
});
app.get('/product/:category',(req,res)=>{
    res.send(req.params)
});
app.listen(port,()=>{
    console.log("hi")
})
