const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.post('/submit',(req,res)=>{
    const user = req.body
    res.send(user)
})
const token = (req,res,next)=>{
    console.log("token is created")
    next()
}
app.get('/submit',token,(req,res)=>{
    res.send("user is nishana")
})
app.put('/submit/update',(req,res)=>{
    res.send("user updated")
})
app.delete('/submit/delete',(req,res)=>{
    res.send("user deleted")
})

app.listen(port,()=>{
    console.log("post")
})
