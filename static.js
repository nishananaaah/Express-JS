const express = require('express');
const app = express();
const path = require('path');


const port =3000

//serving static files
app.use(express.static('public'));//middleware

app.listen(port,()=>{
 console.log('serve static files')
})