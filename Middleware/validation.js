function Validation(req,res,next){
    if(req.Token){
        console.log("Token Approved");
        next();
        return;
    }
}
module.exports=Validation;