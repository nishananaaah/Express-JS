//MIDDLEWARE
const express = require("express");
const app = express();
const Token = require("./Middleware/token");
const Validation = require("./Middleware/validation");


app.use(DateGenerator)//to access this middleware globally // default middleware firstly call this

const Middleware =[Token,Validation]
app.get("/profile",Middleware,(req,res)=>{// firstly call th token function/middle ware
     console.log("User Logged")      // secondly call the next function
    res.send("<h1>Success</h1>");
    
   });
   app.get("/",(req,res)=>{ //it does not have a middleware
    console.log("Default URL");
    res.send("<h1>Home</h1>")
   })
   function DateGenerator(req,res,next){
    console.log(new Date());//current date and time
    next();
   }


const PORT = process.env.PORT||3001;
app.listen(PORT)