const express = require("express");
const app = express();
const path = require('path')
const port = 3000

app.use(express.static('Views'))
app.get('/home',(req,res)=>{
    res.send("home page")
});
// app.post('/home',(req,res)=>{
//     res.send("post")
// });
// app.put('/home',(req,res)=>{
//     res.send("update")
// });
// app.delete('/home',(req,res)=>{
//     res.send("delete")
// });
app.get('/about',(req,res)=>{
    res.send("about page")
})
// app.get('/flights/:from-:to',(req,res)=>{
//     res.send(`flights from  ${req.params.from} to ${req.params.to}`)
//    const userId = req.params.id
//    const cata = req.params.category
//     res.send(`user id is ${userId} and product is ${cata}`)
    // const {category} = req.params
    // if(category==='laptop'){
    //     res.send("laptops")
    // }else if(category==='mobile'){
    //     res.send("mobiles")
    // }else{
    //     res.send("other products")
//     // }
// })
app.get('/product/users',(req,res)=>{
    const query = req.query;
   res.send(query)
})
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })

// app.get('/download',(req,res)=>{
//     res.download(path.join(__dirname,'sample.txt'))
// })
app.listen(port,()=>{
   console.log("practied")
})

