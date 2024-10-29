const express = require("express");
const app = express();
// const path = require("path") // otherwise of static
app.use(express.static("Views")) //globally access the html files to type as in the url

app.get("/",(req,res)=>{   // its a routing using express instead of http routing
   res.sendFile(path.join(__dirname,"Views","index.html")) // we can send or display the file
   //res.json("<h1>Home</h1>") converted to json   
//    res.render("")//NODE JS write to html code
});
app.get("*",(req,res)=>{
    res.status(404)
    res.send("404")    //the url has not found
})
const PORT = process.env.PORT ||3001 ; //port number
app.listen(PORT,()=>console.log(`server Running on ${PORT}`))