const express =require("express");
const app = express();
const path = require("path")
const port =3000;
//Basic Routing
//HTML File as Response

// app.use(express.static('public'))

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'index2.html'))
// })
//Product
app.get('/product',(req,res)=>{//GET
    res.send("product")
})
app.get('/product/:category',(req,res)=>{
    res.send(req.params.category)
})
// // app.post("/product",(req,res)=>{//POST
//     res.send("Product Created")
// })
// app.put("/product",(req,res)=>{//PUT
//     res.send("Product Updated")
// })                                    //it does not working in  the POSTMAN
// app.delete("/product",(req,res)=>{//DELETE
//     res.send("Product Deleted")
// })
// About
// app.get("/about",(req,res)=>{
//     res.sendFile(path.join(__dirname,'about.html'))
// })
// //Contact
// app.get("/contact",(req,res)=>{
//     res.sendFile(path.join(__dirname,'contact.html'))
// })

app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})