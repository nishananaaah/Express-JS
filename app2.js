const express = require("express");
const app = express();
const port = 3000;

const mockUsers =[
    {id:1,username:"Nishana",diplayname:"nishana"},
    {id:2,username:"Aman",diplayname:"aman"},
    {id:3,username:"Mammad",diplayname:"mammad"}
]

app.get('/',(req,res)=>{
    res.status(201).send({msg:"Hello"})
});
app.get('/api/users',(req,res)=>{
    console.log(req.query)//locaalhost:3000/api/users?key=value&
    const {query : {filter,value},} = req
    //when filter and value are undefined
  if(!filter &&!value) return res.send(mockUsers)
    if(filter && value) return res.send(
        mockUsers.filter((user)=>user[filter].includes(value))
    )
});
app.get('/api/users/:id',(req,res)=>{
     console.log(req.params);//req.params
     const parsedId = parseInt(req.params.id);
     if(isNaN(parsedId))return res.status(400).send({msg:"Bad Request. invalid ID"});
     const findUser=mockUsers.find((user)=>user.id===parsedId);
     if(!findUser) return res.sendStatus(404)
        return res.send(findUser)
})

app.listen(port,()=>{
    console.log("APP 2")
})



