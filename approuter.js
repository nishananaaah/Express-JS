const express = require('express');
const app = express();
const path = require('path')
const port =3000;
const productRouter = require('./Routes/product');
const userRouter = require('./Routes/user');

app.use('/product',productRouter);
app.use('/user',userRouter);
app.listen(port,()=>{
    console.log("Express.Router")
})