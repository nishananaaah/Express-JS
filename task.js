const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.post('/submit',(req,res)=>{
    const user = req.body
    res.send(user)
})
app.listen(port,()=>{
    console.log("post")
})