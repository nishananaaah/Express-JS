const express =require("express");
const app = express();
const port =3000;
//Basic Routing

app.get("/",(req,res)=>{
    res.send("Home")
})
//Product
app.get("/product",(req,res)=>{//GET
    res.send("Product PAGE")
})
app.post("/product",(req,res)=>{//POST
    res.send("Product Created")
})
app.put("/product",(req,res)=>{//PUT
    res.send("Product Edited")
})
app.delete("/product",(req,res)=>{//DELETE
    res.send("Product Deleted")
})
//About
app.get("/about",(req,res)=>{
    res.send("About PAGE")
})
//Contact
app.get("/contact",(req,res)=>{
    res.send("Contact PAGE")
})

app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})