const express = require('express');
const app = express();
const path = require('path')
const port =3000;

app.get('/flights/:from-:to',(req,res)=>{
    res.send(`flights from ${req.params.from} to ${req.params.to}`) // can add (.) and (-) in the parameters
});
app.get('/place/:state.:dist',(req,res)=>{
    res.send(`state is ${req.params.state} district : ${req.params.dist}`) // can add (.) and (-) in the parameters
});
// app.get('/product/:category/:brand',(req,res)=>{// can add one more parameters
//     // res.send(req.params.category) //Route Params
    
//     const {category} = req.params //Destucuring
//     const {brand} = req.params;
//      res.send(`Product is ${category} and Brand is ${brand}`)
// // if(category==='laptop'){
//     //     res.send("Laptop page")
//     // }else if(category==='mobile'){
//     //     res.send("Mobile page")
//     // }else{
//     //     res.send("Other Products")
//     // }

//  });
app.listen(port,()=>{
    console.log("hi")
})