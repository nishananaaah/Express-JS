const express = require('express');
const app = express();
const path = require('path');
const port =3000;
//Download file from server
app.use(express.static(path.join(__dirname,'views')))
app.get('/',(req,res)=>{
//    res.download(path.join(__dirname,'sample.txt'))//dowload a file sample
      res.sendFile(path.join(__dirname,'index.html'))
});
app.get('/download',(req,res)=>{
          res.download(path.join(__dirname,'views/kitty.jpg'))//when the downloadclicked the image will be downloaded
    });
app.listen(port,()=>{
    console.log("download file");
   
})