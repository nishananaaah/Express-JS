function Token(req,res,next){
    console.log("Creating Token...");
       
    req.Token = true
        next();  
   
}
module.exports = Token;