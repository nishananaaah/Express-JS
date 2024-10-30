//MIDDLEWARE
const express = require("express");
const app = express();


app.get("/profile",Token,Validation,(req,res)=>{// firstly call th token function/middle ware
     console.log("User Logged")      // secondly call the next function
    res.send("<h1>Success</h1>");
    
   });
function Token(req,res,next){
    // console.log(req.url) // the middleware can access the app resquest
    console.log("Creating Token...");//Midddleware //Coustom
    setInterval(()=>{
        const TOKEN ="123";
        req.Token = Token
        next();  // next();//next middleware is app.get
    },1000)
}
function Validation(req,res,next){
    if(req.Token){
        console.log("Token Approved");
        next();
    }
}
const PORT = process.env.PORT||3001;
app.listen(PORT)